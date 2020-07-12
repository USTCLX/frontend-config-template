const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',

    devtool: 'eval-cheap-module-source-map',

    output: {
        filename: '[name].[id].js',
        chunkFilename: 'async/[name].[id].js',
    },

    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    'style-loader',
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

    plugins: [new HotModuleReplacementPlugin()],

    devServer: {
        port: 8089,
        open: true,
        openPage: 'example',
        writeToDisk: true,
        hot: true,
    },
});
