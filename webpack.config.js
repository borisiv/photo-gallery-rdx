var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
// console.log(webpack);

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [precss]
            }
        })
        // new NpmInstallPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: {
                        //     name: '[name].css',
                        //     outputPath: 'assets/css/'
                        // }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            enforce: "pre"
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime']
                        }
                    }
                    // {
                    //     loader: 'react-hot-loader/patch',
                    //     options: {
                    //         plugins: ['transform-runtime'],
                    //         enforce: "post"
                    //     }
                    // }
                ],
                include: [
                    path.resolve(__dirname, "src"),
                ]
            }
        ]
    }
    // postcss: function() {
    //     return [autoprefixer, precss];
    // }
};