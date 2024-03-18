const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
          sources: false, // Disable URL handling to prevent unexpected behavior with imports
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".html"], // Add '.html' to extensions for importing HTML files
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/app/main.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
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
