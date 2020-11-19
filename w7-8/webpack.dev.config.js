const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
        publicPath: '/'
    },
    // devtool: 'eval-cheap-module-source-map',
    devServer: {
        overlay: true,
        stats: 'errors-only',
        port: 3001,
        hot: true,
        historyApiFallback: true,
        contentBase: './'
    },

    resolve: {
    },

    module: {
        rules: [
            {   
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],

    optimization: {

    },
};