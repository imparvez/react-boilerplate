const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require html-webpack-plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ // create new instance
  template: './app/index.html',
  filename: 'index.html', // refers to the name of HTML that a plugin will generate
  inject: 'body' // tells the plugin to add any JS into bottom of the page before closing body tag
})
module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	plugins: [HtmlWebpackPluginConfig]
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