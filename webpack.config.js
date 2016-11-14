module.exports = {
  entry: './js/easyjet-app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, // include .js files 
        exclude: /node_modules/, // exclude any and all files in the node_modules folder 
        loader: "jshint-loader"
            }
        ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
};