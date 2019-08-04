const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');

const config = {
  context: APP_DIR,
  entry: './index.jsx',
  output: {
    filename: '[name][chunkhash].js',
    path: BUILD_DIR,
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: BUILD_DIR,
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: '[path][name].[ext]',
            outputPath: 'image/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '*'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],
};

module.exports = config;
