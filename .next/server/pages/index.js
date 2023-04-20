"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [predictions, setPredictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageKey, setImageKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleGetPredictions = async ()=>{\n        setIsLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://nordcloud.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=Description\", {\n                url: imageUrl\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Ocp-Apim-Subscription-Key\": \"5f8079bb0e5840db9183f4595a467fc7\"\n                }\n            });\n            setImageSrc(imageUrl);\n            setImageKey((prevKey)=>prevKey + 1);\n            const tags = response.data.description.tags;\n            const predictions = response.data.description.captions.map((caption)=>({\n                    text: caption.text,\n                    confidence: caption.confidence\n                }));\n            for (let tag of tags){\n                predictions.push({\n                    text: tag,\n                    confidence: 0\n                });\n            }\n            predictions.sort((a, b)=>b.confidence - a.confidence);\n            setPredictions(predictions);\n        } catch (error) {\n            console.error(error);\n            setPredictions([]);\n            setImageSrc(\"\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"flex justify-center items-center bg-slate-300 py-4 shadow-md rounded-md my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-black font-bold text-3xl tracking-wide text-center\",\n                        children: [\n                            \"Get photo categories with \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-blue-900\",\n                                children: \"Azure Cognitive Services\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 109\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white flex items-center rounded-full shadow-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: imageUrl,\n                            onChange: (e)=>setImageUrl(e.target.value),\n                            placeholder: \"Enter image URL\",\n                            className: \"rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleGetPredictions,\n                                disabled: !imageUrl || isLoading,\n                                className: `bg-blue-500 text-white font-bold py-2 px-4 rounded-full ${isLoading && \"opacity-50 cursor-not-allowed\"}`,\n                                children: isLoading ? \"Loading...\" : \"Get Predictions\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                imageSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageSrc,\n                        className: \"w-full max-w-md rounded-lg shadow-md\"\n                    }, imageKey, false, {\n                        fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, this),\n                predictions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8 p-4 bg-white rounded-lg shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-bold mb-4\",\n                            children: \"Top 3 Predictions\"\n                        }, void 0, false, {\n                            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"flex justify-between items-center py-2 border-b border-gray-300\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: prediction.text\n                                        }, void 0, false, {\n                                            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm text-gray-500\",\n                                            children: [\n                                                \"Confidence: \",\n                                                (prediction.confidence * 100).toFixed(2),\n                                                \"%\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/max/Downloads/NCR/dog-breed-aws/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJtQixXQUFXN0IsSUFBSTs7Ozs7O3NEQUNoRCw4REFBQ2E7NENBQUtILFdBQVU7O2dEQUF3QjtnREFDeEJtQixDQUFBQSxXQUFXNUIsVUFBVSxHQUFHLEdBQUUsRUFBRytCLE9BQU8sQ0FBQztnREFBRzs7Ozs7Ozs7bUNBTG5ERjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2ctYnJlZWQtYXdzLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFByZWRpY3Rpb24ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcHJlZGljdGlvbnMsIHNldFByZWRpY3Rpb25zXSA9IHVzZVN0YXRlPFByZWRpY3Rpb25bXT4oW10pO1xuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpbWFnZUtleSwgc2V0SW1hZ2VLZXldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBoYW5kbGVHZXRQcmVkaWN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwczovL25vcmRjbG91ZC5jb2duaXRpdmVzZXJ2aWNlcy5henVyZS5jb20vdmlzaW9uL3YzLjIvYW5hbHl6ZT92aXN1YWxGZWF0dXJlcz1EZXNjcmlwdGlvblwiLFxuICAgICAgICB7IHVybDogaW1hZ2VVcmwgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCI6IHByb2Nlc3MuZW52LkFaVVJFX1NFQ1JFVF9BQ0NFU1NfS0VZIGFzIHN0cmluZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgc2V0SW1hZ2VTcmMoaW1hZ2VVcmwpO1xuICAgICAgc2V0SW1hZ2VLZXkoKHByZXZLZXkpID0+IHByZXZLZXkgKyAxKTtcblxuICAgICAgY29uc3QgdGFnczogc3RyaW5nW10gPSByZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uLnRhZ3M7XG4gICAgICBjb25zdCBwcmVkaWN0aW9uczogUHJlZGljdGlvbltdID0gcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbi5jYXB0aW9ucy5tYXAoXG4gICAgICAgIChjYXB0aW9uOiB7IHRleHQ6IHN0cmluZzsgY29uZmlkZW5jZTogbnVtYmVyIH0pID0+ICh7XG4gICAgICAgICAgdGV4dDogY2FwdGlvbi50ZXh0LFxuICAgICAgICAgIGNvbmZpZGVuY2U6IGNhcHRpb24uY29uZmlkZW5jZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgIHByZWRpY3Rpb25zLnB1c2goe1xuICAgICAgICAgIHRleHQ6IHRhZyxcbiAgICAgICAgICBjb25maWRlbmNlOiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcHJlZGljdGlvbnMuc29ydCgoYSwgYikgPT4gYi5jb25maWRlbmNlIC0gYS5jb25maWRlbmNlKTtcbiAgICAgIHNldFByZWRpY3Rpb25zKHByZWRpY3Rpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBzZXRQcmVkaWN0aW9ucyhbXSk7XG4gICAgICBzZXRJbWFnZVNyYyhcIlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIG1heC13LW1kXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctc2xhdGUtMzAwIHB5LTQgc2hhZG93LW1kIHJvdW5kZWQtbWQgbXktNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LTN4bCB0cmFja2luZy13aWRlIHRleHQtY2VudGVyXCI+R2V0IHBob3RvIGNhdGVnb3JpZXMgd2l0aCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwXCI+QXp1cmUgQ29nbml0aXZlIFNlcnZpY2VzPC9zcGFuPjwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBzaGFkb3cteGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbWFnZVVybH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2VVcmwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBpbWFnZSBVUkxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sLWZ1bGwgdy1mdWxsIHB5LTQgcHgtNiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdldFByZWRpY3Rpb25zfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWltYWdlVXJsIHx8IGlzTG9hZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCAke1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJiBcIm9wYWNpdHktNTAgY3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IFwiR2V0IFByZWRpY3Rpb25zXCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpbWFnZVNyYyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiIGtleT17aW1hZ2VLZXl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3ByZWRpY3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTRcIj5Ub3AgMyBQcmVkaWN0aW9uczwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3ByZWRpY3Rpb25zLm1hcCgocHJlZGljdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHktMiBib3JkZXItYiBib3JkZXItZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57cHJlZGljdGlvbi50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBDb25maWRlbmNlOiB7KHByZWRpY3Rpb24uY29uZmlkZW5jZSAqIDEwMCkudG9GaXhlZCgyKX0lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkhvbWUiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicHJlZGljdGlvbnMiLCJzZXRQcmVkaWN0aW9ucyIsImltYWdlU3JjIiwic2V0SW1hZ2VTcmMiLCJpbWFnZUtleSIsInNldEltYWdlS2V5IiwiaGFuZGxlR2V0UHJlZGljdGlvbnMiLCJyZXNwb25zZSIsInBvc3QiLCJ1cmwiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIkFaVVJFX1NFQ1JFVF9BQ0NFU1NfS0VZIiwicHJldktleSIsInRhZ3MiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJjYXB0aW9ucyIsIm1hcCIsImNhcHRpb24iLCJ0ZXh0IiwiY29uZmlkZW5jZSIsInRhZyIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiaW1nIiwic3JjIiwibGVuZ3RoIiwicCIsInVsIiwicHJlZGljdGlvbiIsImluZGV4IiwibGkiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();