const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");
const dotenv = require('dotenv');

process.env.NODE_ENV = "production";

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./src/index",
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),

      // Display bundle stats
      new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),
  
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
      }),
  
      new webpack.DefinePlugin({
        // This global makes sure React is built in prod mode.
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        favicon: "public/favicon.ico",
        minify: {
          // see https://github.com/kangax/html-minifier#options-quick-reference
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"]
        },
        {
          test: /(\.css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("cssnano")],
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  };
};
