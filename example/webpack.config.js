"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "eval-source-map",
    entry: ["./index.ts"],
    mode: "development",
    module: {
        rules: [
            {
                loader: "ts-loader",
                test: /\.ts$/,
            },
        ],
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        extensions: [".js", ".ts"],
        modules: ["./node_modules", "./src"],
    },
};