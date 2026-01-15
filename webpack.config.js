const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.jsx"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "eval-source-map",
  devServer: {
    port: 5000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // should use babel-loader for all js and jsx files
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"], // For JSX
            },
          },
        ],
      },
      {
        // should use style-loader and css-loader for all css files
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // v5 supports image loaders out of box
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[chunkhash].js",
    publicPath: "/", // Default base path
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_DASHBOARD": JSON.stringify("awfy"),
    }),
  ],
};

module.exports = (env) => {
  if (env.env === "production") {
    config.mode = "production";
    config.devtool = "source-map";
  }
  return config;
};
