var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        name: "toolkit",
        entry: "./scss/toolkit.scss",
        output: {
            path: "./dist",
            filename: "toolkit.js"
        },
        module: {
            loaders: [
                {test: /\.scss$/, loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions!sass?indentedSyntax")},
                {test: /\.svg$/, loader: 'url-loader'},
                {test: /\.woff(2)?$/, loader: "url-loader?mimetype=application/font-woff"},
                {test: /\.ttf?$/, loader: "url-loader?limit=100000&mimetype=application/x-font-ttf"}
            ]
        },
        plugins: [
            new ExtractTextPlugin("/toolkit.css")
        ]
    },
    {
        name: "style-guide",
        entry: "./style-guide/global.scss",
        output: {
            path: "./dist",
            filename: "style-guide.js"
        },
        module: {
            loaders: [
                {test: /\.scss$/, loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions!sass?indentedSyntax")}
            ]
        },
        plugins: [
            new ExtractTextPlugin("/style-guide.css")
        ]
    }
];
