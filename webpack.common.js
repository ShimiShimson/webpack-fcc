const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
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
        ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html",
    })],
}