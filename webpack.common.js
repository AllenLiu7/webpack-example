const path=require("path")
//const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].[contenthash].js', //adding hash to the file name to tell the browser the file has changed if change by us. To avoid browser cache.
    clean: true //clean old output in dist folder
  },
  // plugins: [
  //   new HtmlWebpackPlugin({ //????????????????????????
  //     title: 'Production',
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //For all .js or .jsx files, use babel-loader to transpile all of them.
        exclude: /node_modules/,
        use: [
          'babel-loader',
      ] //is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',//Inject CSS into the DOM.
          'css-loader'   //he css-loader interprets @import and url() like import/require() and will resolve them. help webpack to collect CSS from all the css files referenced in your application and put it into a string.

        ]
    }
    ]
  }
}