const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  public: path.resolve(__dirname, '../public'),
};

const config = {
  externals: {
    paths: PATHS,
  },
  context: PATHS.src,
  entry: './index.jsx',
  output: {
    filename: '[name].[chunkHash].js',
    path: PATHS.public,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
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
