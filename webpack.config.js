const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      './app/index.js'
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: path.resolve(__dirname, "node_modules"), use: ["babel-loader" ] },
      { test: /\.css?$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|gif)$/, use: ["url-loader"] },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: ["url-loader"] }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    overlay: true
  }
}

/*
the order for loading CSS has its purpose. style-loader which was written first will be executed last 
and the css-loader which was written last will be executed first.
So every loader in the arrays works in that manner. Last one will be executed first, then the second-last, and then so on.
*/