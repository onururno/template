const path = require("path"); //it will generate an absolute path to the correct folder

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/App.js", //path to our js file
  output: {
    filename: "bundled.js", //change the auto generate file name
    path: path.resolve(__dirname, "app"), //requires absolute path!
  },
  mode: "development", // to get rid of the Warining msg in terminal
  watch: true, //web pack is acitvely watching us if we refresh the js file (STRG + C to cancel the watching!!!)
  module: {
    rules: [
      {
        test: /\.css$/i, //works only if it pass .css
        use: [
          "style-loader", //refresh the style
          "css-loader", //refresh css
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } },
        ],
      },
    ],
  },
};
