const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getEntries, getHtmlWebpackPluginConfigs } = require('./utils');

const entries = getEntries();
const HtmlWebpackPlugins = getHtmlWebpackPluginConfigs().map(
    config => new HtmlWebpackPlugin(config)
);

module.exports = {
    mode: 'development',

    entry: entries,

    output: {
        filename: '[name].[chunkhash].js',
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
                exclude: /node_modules/,
            },
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
            {
                test: /\.(png|jpg|gif|jpep)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024, //10 kb
                            name: 'assets/images/[name].[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        ...HtmlWebpackPlugins,
    ],

    devServer: {
        port: 8089,
        open: true,
    },
};
