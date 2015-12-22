var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    name: "toolkit",
    entry: {
      toolkit: ["./styles/toolkit.scss"],
      fonts: ["./styles/fonts.css"],
      "style-guide": ["./style-guide/global.scss"]
    },
    output: {
      path: "./dist",
      filename: '[name].js'
    },
    module: {
      loaders: [
        { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions!sass?indentedSyntax") },
        { test: /\.css$/, loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions") },
        { test: /\.svg$/, loader: 'url-loader' },
        { test: /\.woff(2)?$/, loader: "url-loader?mimetype=application/font-woff" }
      ]
    },
    plugins: [
      new ExtractTextPlugin("/toolkit.css")
    ]
  }
];
