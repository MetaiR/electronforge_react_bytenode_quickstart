/** @type {import(‘@types/webpack’).Configuration} */
module.exports = {
  entry: './src/main.ts',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json']
  },
}