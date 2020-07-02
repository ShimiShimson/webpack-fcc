const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js",
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader', // 3. Injects into DOM
              'css-loader', // 2. Turns  css into commonjs
              'sass-loader' // 1.turns sass into css
            ],
          },
          {
            test: /\.html$/,
            use: ["html-loader"],
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "imgs",
              }
            }
          },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html",
    })],
}