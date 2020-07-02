const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist"),
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
        ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html",
    })],
}