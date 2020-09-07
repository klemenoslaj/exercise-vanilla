const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ProgressPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "Vanilla exercise",
    }),
  ],
};
