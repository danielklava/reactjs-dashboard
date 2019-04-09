const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path : path.join(__dirname, "/dist"),
        filename : "index_bundle.js"
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                resolve: {
                  extensions: [".js", ".jsx"]
                },
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                },
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html"
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim : true,
            skipWaiting : true
        })
    ],
    devServer: {
        disableHostCheck: true
    }
};