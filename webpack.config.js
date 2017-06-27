const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html', // refers to the name of HTML that a plugin will generate
  inject: 'body' // tells the plugin to add any JS into bottom of the page before closing body tag
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
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: path.resolve(__dirname, 'node_modules'), use: ['babel-loader' ] },
      { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|gif)$/, use: ['url-loader'] },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader'] }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig, 
    HotModuleReplacementPlugin
  ],
  devServer: {
    contentBase: './app',
    hot: true,
    overlay: true,
    port: 8081,
    historyApiFallback: true
  }
}


/**
 * entry: Specifies the entry file where the bundler starts the bundling process.
 * output: Specifies the location where the bundled Javascript code is to be saved.
 * loaders: They are transformations that are applied on a file in our app.
 * babel: We need babel in order to compile our code into a syntax that browsers support
 * babel-preset-react and babel-preset-es2015: These presets are Babel plugin that simply 
 * tell Babel what to look out for and transform into plain, vanilla JS
 * html-webpack-plugin: One way to add the bundled file to our HTML is to insert a script tag and pass the location of the bundled file into the script tag. 
 * A better way to do this is to use this nifty package called html-webpack-plugin.
 * In layman's term, this plugin take care of your script insertions with just a few configurations. 
 */

/*
the order for loading CSS has its purpose. style-loader which was written first will be executed last 
and the css-loader which was written last will be executed first.
So every loader in the arrays works in that manner. Last one will be executed first, then the second-last, and then so on.
*/

/*
The main idea about path and publicPath is that path in Output will contain only your output bundle files/folder and
publicPath will be the place or I can say reference generated to be be a link in your CDN 
 */
