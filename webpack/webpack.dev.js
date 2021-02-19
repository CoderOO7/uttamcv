'use strict';

const paths = require('./paths');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: paths.build,
    pathinfo: false,
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: paths.build,
    hot: true,
    //writeToDisk: true,
  },
  //improve runtime build performance
  optimization: {
    runtimeChunk: true,
  },
});
