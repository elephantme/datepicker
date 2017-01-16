var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].min.js',
        library: 'pickdate',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js']
    }
};

module.exports = config;