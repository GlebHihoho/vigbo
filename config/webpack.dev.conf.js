const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8081,
    open: true,
    contentBase: baseWebpackConfig.externals.paths.public,
    overlay: true,
  },
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
