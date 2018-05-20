const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [path.resolve(__dirname, '../src/index.js')],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'env',
                                'react',
                            ],
                            "plugins": ["transform-object-rest-spread"]
                        },

                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: (loader) => [
                                // require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')({
                                    browsers: [
                                        "> 1%",
                                        "IE 10"
                                    ]
                                }),
                                // automatically transform px to rem
                                // if you don't want to transform px, you can add comment /*no*/
                                // behind the style (e.g width: 100px /*no*/)
                                // or you can uppercase the unit "px" (e.g width: 100PX)
                                require('postcss-px2rem')({
                                    remUnit: 40,
                                    remPrecision: 8
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../template/index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            mixin: path.resolve(__dirname, '../src/css/mixin'),
            variable: path.resolve(__dirname, '../src/css/variable'),
            component: path.resolve(__dirname, '../src/components'),
            page: path.resolve(__dirname, '../src/page'),
        }
    }
};