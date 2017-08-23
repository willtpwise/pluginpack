const path = require('path')
const webpack = require('webpack')
const GenerateFilePlugin = require('generate-file-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = path.resolve(__dirname, '..', 'src')
const distDir = path.resolve(__dirname, '..', 'dist')

module.exports = {
  context: srcDir,

  devtool: 'source-map',

  entry: [
    './src/index.js'
  ],

  output: {
    filename: 'bundle.[hash].js',
    path: distDir,
    publicPath: '/',
    sourceMapFilename: 'bundle.map'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }, {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: 'images/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'PRODUCTION': JSON.stringify(true)
    }),
    new GenerateFilePlugin('../config/environment.json.js'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('bundle.[hash].css')
  ]
}
