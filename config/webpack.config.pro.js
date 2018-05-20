const webpack = require('webpack');
const merge = require('webpack-merge');
let baseConfig = require('../config/webpack.config.base');

let proConfig = {
    mode: 'production'
}

module.exports =  merge(baseConfig, proConfig);