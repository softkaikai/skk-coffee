const webpack = require('webpack');
const merge = require('webpack-merge');
let baseConfig = require('../config/webpack.config.base');
let devConfig = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        host: '0.0.0.0',
        port: '8181'
    },
    plugins: [
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
module.exports =  merge(baseConfig, devConfig);
