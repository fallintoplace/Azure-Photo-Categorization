import { useState } from "react";
import axios from "axios";

interface Prediction {
  text: string;
  confidence: number;
}

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageKey, setImageKey] = useState<number>(0);

  const handleGetPredictions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://nordcloud.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=Description",
        { url: imageUrl },
        {
          headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": process.env.AZURE_SECRET_ACCESS_KEY as string,
          },
        }
      );
      setImageSrc(imageUrl);
      setImageKey((prevKey) => prevKey + 1);

      const tags: string[] = response.data.description.tags;
      const predictions: Prediction[] = response.data.description.captions.map(
        (caption: { text: string; confidence: number }) => ({
          text: caption.text,
          confidence: caption.confidence,
        })
      );

      for (let tag of tags) {
        predictions.push({
          text: tag,
          confidence: 0,
        });
      }

      predictions.sort((a, b) => b.confidence - a.confidence);
      setPredictions(predictions);
    } catch (error) {
      console.error(error);
      setPredictions([]);
      setImageSrc("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-md">
        <header className="flex justify-center items-center bg-slate-300 py-4 shadow-md rounded-md my-4">
          <h1 className="text-black font-bold text-3xl tracking-wide text-center">Get photo categories with <span className="text-blue-900">Azure Cognitive Services</span></h1>
        </header>
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          />
          <div className="p-4">
            <button
              onClick={handleGetPredictions}
              disabled={!imageUrl || isLoading}
              className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
            >
              {isLoading ? "Loading..." : "Get Predictions"}
            </button>
          </div>
        </div>
        {imageSrc && (
          <div className="mt-8">
            <img src={imageSrc} className="w-full max-w-md rounded-lg shadow-md" key={imageKey}/>
          </div>
        )}
        {predictions.length > 0 && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg font-bold mb-4">Top 3 Predictions</p>
            <ul>
              {predictions.map((prediction, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-300"
                >
                  <span className="font-semibold">{prediction.text}</span>
                  <span className="text-sm text-gray-500">
                    Confidence: {(prediction.confidence * 100).toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
