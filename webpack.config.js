const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\\.s?css$/, use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\\.js$/, loader: 'babel-loader',
      exclude: /node_modules/ }
    ]
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
      publicPath: '/'
  }
};