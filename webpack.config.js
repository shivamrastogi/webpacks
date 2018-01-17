const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  console.log("!!!!!ENVIRONMENT!!!!!!!",env)
  return ({
    entry: './src/index.js',
    devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'style-loader'
            })
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
             }
          }
        ]
      },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      
      new UglifyJSPlugin({'sourceMap': true}), 
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      })
    ]
  })
};
