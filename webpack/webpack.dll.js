const path = require('path')
const WebpackBar = require('webpackbar');
const webpack = require('webpack')
const config = {
    entry: {
        app: './index.js',
    },
    output: {
        filename: 'js/[name]-[hash].js',
        chunkFilename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '..', 'dist')// __dirname 相对于当前文件位置
    },
    plugins: [
        new WebpackBar(),
        new webpack.DefinePlugin({
            "ENV": JSON.stringify(process.env.NODE_ENV)
        }),
    ]
}

module.exports = config