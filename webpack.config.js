const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other webpack configurations...

  plugins: [
    // Other plugins...

    new Dotenv({
      systemvars: true,
    }),
  ],
};
