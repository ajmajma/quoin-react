'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function() {
    return {
        dev: {
            entry: {
                index: './client/app.jsx'
            },
            output: {
                path: path.join(__dirname, '..', '..', 'client'),
                publicPath: "/client/",
                filename: 'bundle.js'
            },
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            resolveLoader: {
                fallback: [path.join(__dirname, 'node_modules')]
            },
            plugins: [
                new webpack.DefinePlugin({
                    "process.env": {
                        "NODE_ENV": JSON.stringify("dev")
                    }
                })
            ]
        },
        prod: {
            entry: {
                index: './client/app.jsx'
            },
            output: {
                path: path.join(__dirname, '../client'),
                publicPath: "/client/",
                filename: 'bundle.js'
            },
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            progress: false,
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            plugins: [
                new webpack.DefinePlugin({
                    "process.env": {
                        "NODE_ENV": JSON.stringify("production")
                    }
                }),
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })
            ]
        }

    }
};
