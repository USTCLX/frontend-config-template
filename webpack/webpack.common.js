const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getEntries, getHtmlWebpackPluginConfigs } = require('./utils');

const entries = getEntries();
const HtmlWebpackPlugins = getHtmlWebpackPluginConfigs().map(
    config => new HtmlWebpackPlugin(config)
);

module.exports = {
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

    plugins: [new CleanWebpackPlugin(), ...HtmlWebpackPlugins],
};