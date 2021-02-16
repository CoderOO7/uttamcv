'use strict';

const paths = require('./paths');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: paths.build,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.build,
    //writeToDisk: true,
  },
});
