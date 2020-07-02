const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
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
}