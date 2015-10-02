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
                {test: /\.woff(2)?$/, loader: "url-loader?mimetype=application/font-woff"},
                {test: /\.ttf?$/, loader: "url-loader?limit=100000&mimetype=application/x-font-ttf"}
            ]
        },
        plugins: [
            new ExtractTextPlugin("/toolkit.css")
        ]
    }
];
