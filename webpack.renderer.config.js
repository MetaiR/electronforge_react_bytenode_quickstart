const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

rules.push({
  test: /\.scss$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
});

/** @type {import(‘@types/webpack’).Configuration} */
module.exports = {
  output: { devtoolModuleFilenameTemplate: '[absolute-resource-path]' },
  module: {
    rules
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
