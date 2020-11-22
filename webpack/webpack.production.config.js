const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const common = require('./webpack.common.config.js');

module.exports = merge(common(), {
  mode: 'production',
  devtool: 'source-map',
  externals: [nodeExternals()],
});
