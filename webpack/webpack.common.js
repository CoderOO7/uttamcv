'use strict';

const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: paths.src,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], //postcss loader require for tailwind, webpack will auto detect postcss.config.js,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
    ],
  },
  plugins: [
    //prevent deletion of assets define in CopyWebpackPlugin
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + '/index.html',
    }),
  ],
};
