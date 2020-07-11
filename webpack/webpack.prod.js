const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    // mode: 'production',
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: 'async/[name].[chunkhash].css',
        }),
    ],
});
