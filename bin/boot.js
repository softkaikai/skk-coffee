const argvs = require('minimist')(process.argv.slice(2));
const merge = require('webpack-merge');
const webpack = require('webpack');
const serve = require('webpack-serve');
const webpackDevServer = require('webpack-dev-server');

let baseConfig = require('../config/webpack.config.base');
let devConfig = require('../config/webpack.config.dev');
let proConfig = require('../config/webpack.config.pro');

let config = null;
let isEnv = argvs.env === 'development';
let isPro = argvs.env === 'production';
if (isEnv) {
    config = merge(baseConfig, devConfig);
} else {
    config = merge(baseConfig, proConfig);
}

module.export = config;

/*const options = {
    hot: true,
    // webpack-dev-server node api don't support open automatically
    // open: true,
    host: '0.0.0.0'
};
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

// 开发环境下启动webpack-serve
if (isEnv) {
    // If use webpack-serve, there are some errors when hot reload
    // so I use webpack-dev-server instead
    /!*let serveObj = {
        compiler,
        // 启动HMR
        hot: true,
        // 自动启动浏览器
        open: true,
        // 默认打开端口
        port: 8888
    };
    serve(serveObj).then((server) => {
        server.on('listening', () => {
            console.log('The serve is running at port 8080');
        })
    });*!/


    const server = new webpackDevServer(compiler, options);

    server.listen(8080, 'localhost', () => {
        console.log('dev server listening on port 8080');
    });
} else {
    // 生产环境下开始编译
    compiler.run((err, stats) => {
        if (err) {
            console.log(err);
            return false;
        }
    })
}*/



