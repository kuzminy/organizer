"use strict";

module.exports = {
    entry: "./js/src/entries/app.entry.js",
    output: {
        filename: "./js/bundles/app.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};