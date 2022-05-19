const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    eslintrc: './src/eslintrc.js',
    prettierrc: './src/prettierrc.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    library: 'config',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './README.md' },
      { from: './package.json' },
    ]),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-jsx'],
        },
      },
    ],
    // rules: [
    //   {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //   },
    // ],
  },
};
