const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {env} = require('../configuration.js');
const nib = require('nib');

module.exports = {
  test: /\.(scss|sass|styl|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {minimize: env.NODE_ENV === 'production'}
      },
      {loader: 'postcss-loader', options: {sourceMap: true}},
      'resolve-url-loader',
      {loader: 'sass-loader', options: {sourceMap: true}},
      {
        loader: 'stylus-loader?resolve url',
        options: {
          use: nib(),
          sourceMap: true,
        }
      },
    ]
  })
};