const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// TODO: Add webpack-merge
console.info("NODE_ENV:", process.env.NODE_ENV);
module.exports = {
  mode: "production",
  entry: "./src/app/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.ts$/i, loader: "swc-loader" },
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.css$/i, use: ["css-loader", "postcss-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".html", ".css"],
    alias: {
      // FEATURES
      "@showcase": path.resolve("src/app/features/showcase"),
      "@error": path.resolve("src/app/features/error"),
      // CORE
      "@core": path.resolve("src/app/core"),
      // INFRASTRUCTURE
      "@infrastructure": path.resolve("src/app/infrastructure"),
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
