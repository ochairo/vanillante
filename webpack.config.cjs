const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// TODO: Add webpack-merge
module.exports = {
  mode: "development",
  entry: "./src/app/main.ts",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" },
  module: {
    rules: [
      { test: /\.ts$/i, loader: "swc-loader" },
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.scss$/i, use: ["raw-loader", "sass-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".html", ".scss", ".css"],
    alias: {
      // FEATURES
      "@showcase": path.resolve("src/app/features/showcase"),
      "@error": path.resolve("src/app/features/error"),
      // SHARED
      "@shared": path.resolve("src/app/shared"),
      // MOCK
      "@mock": path.resolve("src/mock"),
      // TEST
      "@test": path.resolve("src/test"),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/app/main.html" })],
  watchOptions: { ignored: /node_modules/ },
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    historyApiFallback: true,
  },
};
