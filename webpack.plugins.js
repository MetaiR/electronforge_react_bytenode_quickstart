const { BytenodeWebpackPlugin } = require('@herberttn/bytenode-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    new MiniCssExtractPlugin({filename: 'react_app/index.css'}),
    new BytenodeWebpackPlugin({ compileForElectron: true }),
];
