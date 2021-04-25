const path=require("path")

module.exports = {
  mode: 'development', //in development mode, no minification...
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].[contenthash].js', //adding hash to the file name to tell the browser the file has changed if change by us. To avoid browser cache.
    clean: true //clean old output in dist folder
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //For all .js or .jsx files, use babel-loader to transpile all of them.
        exclude: /node_modules/,
        use: ['babel-loader'] //is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.
      }
    ]
  }
}