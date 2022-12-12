const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');
const sortCSSmq = require('sort-css-media-queries');

module.exports = (env, argv) => {
    console.log(argv.mode);
    const config = {
        externals: {
            jquery: 'jQuery',
        },
        entry: {
            script: './src/index.js'
        },
        output: {
            filename: 'js/[name].js',
            clean: true,
        },
        // mode: 'development', // 'production', // 'development', //
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.pug'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/style.css'
            })
        ],
        module: {
            rules: [{
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    argv.mode == 'production' ? MiniCssExtractPlugin.loader : {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                type: argv.mode == 'production' ? 'asset/resource' : 'asset/inline',
                generator: argv.mode == 'production' ? {
                    filename: 'img/[name]-[hash][ext]'
                } : {}
            },
            {
                test: /\.(ttf|woff|woff2|otf|eot|svg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new CssMqpackerPlugin({
                    sort: sortCSSmq
                }),
                '...'
            ],
        },
        devServer: {
            compress: true,
            port: 9000,
            open: true,
            watchFiles: 'src/**/*.*',
        },
        devtool: argv.mode == 'production' ? false : 'eval'
    };
    return config;
};