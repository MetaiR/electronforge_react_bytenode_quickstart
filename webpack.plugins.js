const { BytenodeWebpackPlugin } = require('@herberttn/bytenode-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const inDev = process.env.NODE_ENV !== 'production';

module.exports = inDev ? [] : [
    new MiniCssExtractPlugin({filename: 'react_app/index.css'}),
    new BytenodeWebpackPlugin({ compileForElectron: true }),
];
