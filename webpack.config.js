const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env, args) => {
	const IS_DEV = args.mode === 'development';

	const commonModules = [
		'constants',
		'utils',
		'store/getters',
		'store/actions',
		'store/mutations',
		'store/modulesNames'
	].map(modulePath => path.resolve(__dirname, `src/${modulePath}`));

	const config = {
		mode: args.mode,
		entry: {
			main: {
				import: path.resolve(__dirname, 'src/bootstrap'),
				dependOn: 'common'
			},
			common: commonModules
		},
		optimization: {
			minimize: !IS_DEV,
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
					},
				}
			},
			removeEmptyChunks: true,
			mergeDuplicateChunks: true,
			flagIncludedChunks: !IS_DEV
		},
		resolve: {
			extensions: ['.vue', '.js']
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					loader: 'vue-loader',
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.pug$/,
					exclude: /node_modules/,
					loader: 'pug-plain-loader'
				},
				{
					test: /\.s([ca])ss$/,
					exclude: /node_modules/,
					use: [
						'vue-style-loader',
						'style-loader',
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								implementation: require('dart-sass'),
								sourceMap: true,
							}
						}
					]
				}
			]
		},
		plugins: [
			new VueLoaderPlugin(),
			new CopyWebpackPlugin({
				patterns: [{
					from: 'src/index.html'
				}]
			})
		],
	};
	
	if (IS_DEV) {
		config.devtool = 'source-map';
		config.devServer =  {
			port: 8080,
			hot: true,
			index: 'index.html',
			open: 'Google Chrome'
		};
	}
	
	return config;
};
