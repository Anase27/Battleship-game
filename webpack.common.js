const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
		new HtmlWebpackPlugin({
            title: "Battleship",
			template: './src/template.html',
		}),
	],
    // module:{
	// 	rules:[
	// 		{
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader'],
    //         },
	// 	],
	// },
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    }
}