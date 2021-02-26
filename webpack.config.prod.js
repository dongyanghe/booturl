const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    //  nosources-source-map：会暴露反编译后的文件名和结构，但它不会暴露原始代码，提供完整源码报错信息
    devtool: 'nosources-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]

});
