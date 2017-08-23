const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const autoInjectPlugin = require('auto-inject-webpack-plugin')
const commonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const GenerateFilePlugin = require('generate-file-plugin')
const ProxyPath = require("./config.json").ProxyPath

const webpackConfig = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.dev.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',

      loader: 'eslint-loader',
      options: {
        emitWarning: true
      }
    }, {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: false
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      })
    }, {
      test: /\.(png|svg|jpg|gif|ico|pdf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      'PRODUCTION': JSON.stringify(false)
    }),
    new GenerateFilePlugin('config/environment.json.js'),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      proxy: ProxyPath,
      files: [
        'dist/**/*',
        '**/*.php'
      ],
      reloadDelay: 0
    }),
    new ExtractTextPlugin('bundle.dev.css')
  ]
}

module.exports = webpackConfig
