const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    // cheap-module-source-map:不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。
    // 最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化
    // 外联.map时，.map文件只会在F12开启时进行下载
    devtool: 'cheap-module-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]

});
