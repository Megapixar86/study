const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    entry: {
		main: path.resolve(__dirname, '../src/main/main.js'),
		page1: path.resolve(__dirname, '../src/page1/page1.js'),
	},

    output:
    {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
		clean: true,
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../static'),
                    noErrorOnMissing: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/main/index.html'),
			filename: 'index.html',
			chunks: ['main'],
            minify: true,
        }),
		new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/page1/page1.html'),
			filename: 'page1.html',
			chunks: ['page1'],
            minify: true,
        }),
        new MiniCSSExtractPlugin({
			filename: '[name].[contenthash].css',
		})
    ],
    module:
    {
        rules:
        [
            {
                test: /\.(html)$/,
                use:
                [
                    'html-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext]'
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/fonts/[hash][ext]'
                }
            }
        ]
    }
};
