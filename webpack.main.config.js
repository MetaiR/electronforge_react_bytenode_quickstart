const inDev = process.env.NODE_ENV !== 'production';
/** @type {import(‘@types/webpack’).Configuration} */
module.exports = {
  mode: inDev ? 'development' : 'production',
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