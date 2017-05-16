const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [{
      test: /.\js$|.\jsx$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      include: `${__dirname}/src`,
      exclude: /node_modules/,
    }, {
      test: /.\js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  devServer: {
    inline: true,
    port: 8080
  },
  plugins: [HtmlWebpackPluginConfig],
}