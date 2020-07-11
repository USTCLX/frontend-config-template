const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',

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

    devServer: {
        port: 8089,
        open: true,
        openPage: 'example',
        writeToDisk: true,
    },
});
