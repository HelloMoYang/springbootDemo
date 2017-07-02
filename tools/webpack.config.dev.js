var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin-hash')
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const path = require('path')

// const extractSASS = new ExtractTextPlugin({ filename: 'bundle/style.[contenthash].css', allChunks: true });
// const extractLESS = new ExtractTextPlugin({ filename: 'bundle/style.[contenthash].css', allChunks: true });


module.exports = {
    devServer: {
        contentBase: path.join(config.webpack.path.base),
        // compress: true,
        port: 9000,
        // hot: true,
        // filename: 'bundle/main.js',
        // inline: true,
        // progress: true,
        proxy: {
            '/api/upload': {
                target: 'http://118.244.237.2:8062/',
                // target: 'http://127.0.0.1:8062/',
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/api/*': {
                //target: 'http://118.244.237.2:8062/',
                target: 'http://127.0.0.1:8062/',
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    resolve: {
        alias: {
            // 'remark': path.join(config.webpack.path.base, '/remark'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.hbs', '.scss']
    },
    entry: { 'bundle/main': './src/index.jsx' },
    output: {
        publicPath: '',
        filename: '[name].js',
        chunkFilename: 'bundle/module.[name].js',
        path: path.join(config.webpack.path.pub)
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'lodash': '_',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(tsx?|jsx?)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!postcss-loader!sass-loader', publicPath: '../'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({ use: 'css-loader!postcss-loader!less-loader', publicPath: '../' })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=1000&name=img/[name].[ext]',
                ],
                include: path.resolve(config.webpack.path.src)
            },
            {
                test: /\.(mp3|ogg|mp4)$/i,
                loaders: [
                    'url-loader?name=audio/[name].[ext]',
                ],
                include: path.resolve(config.webpack.path.src)
            },
            {
                test: /\.eot$/i,
                loaders: [
                    'url-loader?name=font/[name].[ext]',
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'bundle/common',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new CopyWebpackPlugin([
            {
                from: config.webpack.path.src + '/libs/',
                to: 'libs/'
            },
            {
                from: config.webpack.path.src + '/config.json',
                to: './'
            }
        ]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [require('autoprefixer'), require('precss')]
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'SMDP',
            template: './src/templates/index',
            filename: 'index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'libs/lodash.min.js',
                'libs/react.min.js',
                'libs/react-dom.min.js',
                'libs/ReactRouter.min.js'],
            append: false
        }),
    ],

};
