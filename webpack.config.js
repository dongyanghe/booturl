const path = require('path');
const webpack = require('webpack');
const glob = require("glob");
//消除冗余的css
// const purifyCssWebpack = require("purifycss-webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const extractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirSrc = path.join(__dirname, 'src');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'BootURL';


/**
 * Webpack 基本配置
 */
module.exports = {
    // target: 'web',  告知 webpack 为目标(target)指定一个环境，默认是 'web'，可省略
    // mode: 'production',
    entry: {    //  入口
        // vendor: [
        //     'lodash'
        // ],
		lodash: 'lodash',
        // jquery: 'jquery',   //  通过HtmlWebpackPlugin.chunks导入jquery
        BrowserComponent: 'BrowserComponent',
        Base: 'Base',
        index: path.join(dirSrc, 'index.ts'),
        login: path.join(dirSrc, 'modules/login/login.ts'),
    },
    externals: {
        // THREE: "dll THREE"
    },
	// output: {
	// 	path:path.resolve(__dirname, 'dist'),
	// 	// 打包多出口文件
	// 	// 生成 index.bundle.js  jquery.bundle.js
	// 	filename: '[name].bundle-[hash].js'
	// },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {    //  先用笨方法导入
            // jquery: path.resolve(__dirname, "src/vendor/jquery-1.9.1.min.js"),   //  大部分jquery组件不兼容高版本jquery，这里用第一版
            Base: path.resolve(__dirname, "src/vendor/base64.js"),
            BrowserComponent: path.resolve(__dirname, "src/vendor/BrowserComponent.js")
        },
        modules: [
            dirNode,
            dirSrc,
            dirAssets
        ]
    },
    plugins: [  //  用来处理各种各样的任务,包括打包优化和压缩、重新定义环境中的变量
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),
		new copyWebpackPlugin([{
            from: path.resolve(__dirname,"favicon.ico"),
            to: './assets/images/'
        },{
            from: path.resolve(__dirname,"src/vendor"),
            to: './vendor/'
        }]),
        // 消除冗余的css代码@defect：也会消除不规范的scss写法（style-loader下不会），请谨慎使用
		// new purifyCssWebpack({
		// 	// glob为扫描模块，使用其同步方法（请谨慎使用异步方法）
		// 	paths: glob.sync(path.join(__dirname, "src/*.html"))
		// }),
		// 全局暴露统一入口
		// new webpack.ProvidePlugin({
        //     $: 'jquery', // $还是会找不到
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     // 'jquery-mousewheel': 'mousewheel'
		// }),
		new webpack.ProvidePlugin({
            THREE: 'THREE',
            'window.THREE': 'THREE',
		}),
        new HtmlWebpackPlugin({ //  依据一个简单的html模板，生成一个自动引用你打包后的JS文件的新index.html"echarts", "jquery", "jquery-mousewheel","mCustomScrollbar",'jquery-animate-nums',
            filename: 'index.html',
            chunks: ["Swiper","Base","BrowserComponent","index"],  // 按需引入对应名字的js、ts文件，会自动根据依赖排序
            template: path.join(dirSrc, 'index.html'),
            title: appHtmlTitle,
            favicon: 'assets/images/favicon.ico',
            minify: {
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new HtmlWebpackPlugin({ //  依据一个简单的html模板，生成一个自动引用你打包后的JS文件的新index.html "jquery","THREE","Projector","CanvasRenderer","particle",
            filename: 'login.html',
            chunks: ["Base","BrowserComponent","login"],  // 按需引入对应名字的js文件
            template: path.join(dirSrc, 'modules/login/login.html'),
            title: appHtmlTitle,
            favicon: 'assets/images/favicon.ico',
            minify: {   //  html页面的注释必须使用闭合注释，比如“//”注释压缩为一行后，后面的代码也会被注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new MiniCssExtractPlugin({
        filename: IS_DEV? '[name].css' : '[name].[hash].css',
         chunkFilename: IS_DEV ? '[id].css' : '[id].[hash].css',
      })
    ],
    module: {   //  使用对应loader进行转换某个或某些文件
        rules: [
            // BABEL
            // {
            //     test: /\.js$/,  //  匹配loaders所处理文件的拓展名的正则表达式
            //     loader: 'babel-loader', //  插件名称
            //     // include: 正则表达式, 必须包括的文件/文件夹
            //     exclude: /(node_modules)/,  //  排除的文件/文件夹
            //     options: {
            //         compact: true
            //     }
            // },
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            },
            // {
            //     test: require.resolve('jquery'),
            //     use: [{
            //        loader: 'expose-loader',
            //        options: 'jQuery'
            //     },{
            //        loader: 'expose-loader',
            //        options: '$'
            //     }]
            //  },
            // STYLES
            {
                test: /\.css$/,
                use:[
                    // IS_DEV 大项目开发时用style-loader快些
                    false ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                        //   publicPath: './'
                        // }
                    }, //  将所有的计算后的样式加入页面中
                    {
                        loader: 'css-loader',   //  能够使用类似@import 和 url(...)的方法实现 require()的功能
                        options: {
                            sourceMap: IS_DEV,
                            // modules: true, // 指定启用css modules划分，防止类名冲突
                            // localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, 
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                ]
            },

            // SASS
            {
                test: /\.scss/,
                use: [
                    false ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //   // you can specify a publicPath here
                        //   // by default it use publicPath in webpackOptions.output
                        //   publicPath: './'
                        // }
                    } , //  将所有的计算后的样式加入页面中
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV,
                            // modules: true, // 指定启用css modules划分，防止类名冲突
                            // localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     sourceMap: IS_DEV,
                        //     includePaths: [dirAssets]
                        // }
                    }
                ]
            },
			{
				test: /\.(html|htm)$/,
				// html中的img标签
				use: ["html-withimg-loader"]
			},
            // IMAGES
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|ttc|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name][hash:6].[ext]'
                }
            }
        ]
    }
};

