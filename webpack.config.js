const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const templateFn = require('adjust-sourcemap-loader').moduleFilenameTemplate({
  format: 'projectRootRelative'
})

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: false,
  allChunks: true
})

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: templateFn,
    devtoolFallbackModuleFilenameTemplate: templateFn
  },devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: extractSass.extract({
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader',
            options: Object.assign(
              JSON.parse(process.env.LOADER_OPTIONS),
              process.env.LOADER_JOIN && {
              }
            )
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ] })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }, plugins: [
    extractSass
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
