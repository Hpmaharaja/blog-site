const path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['react', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
        include: __dirname + '/src'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        include: __dirname + '/src'
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 8000,
        proxy: 'http://localhost:8080/'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
    ]
};
