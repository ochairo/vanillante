const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app/main.ts",
  output: {
    path: path.resolve("./", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "swc-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /.scss$/,
        use: [
          "raw-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve("./", "node_modules")],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".html", ".scss", ".css"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/app/main.html",
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: {
      directory: path.join("./", "dist"),
    },
    historyApiFallback: true,
  },
};
