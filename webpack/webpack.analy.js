const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./webpack.prod');

module.exports = merge(prodConfig, {
    plugins: [new BundleAnalyzerPlugin({})],
});
