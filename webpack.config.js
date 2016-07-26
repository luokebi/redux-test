var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle: './src/client.js',
        vendor: ['react']
    },
    output: {
        path: './public',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // include: path.join(__dirname ,'src'),
                exclude: /node_modules/,
                query: {
                    presets:['es2015','react']
                }
            },


            {
                test: /\.less$/,
                loader:  ExtractTextPlugin.extract('style','css!less')
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};