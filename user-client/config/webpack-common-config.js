const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      Actions: path.resolve(resolveApp('src'), 'actions'),
      Components: path.resolve(resolveApp('src'), 'components'),
      Containers: path.resolve(resolveApp('src'), 'containers'),
      Reducers: path.resolve(resolveApp('src'), 'reducers'),
      Sagas: path.resolve(resolveApp('src'), 'sagas'),
      Schemas: path.resolve(resolveApp('src'), 'schemas'),
      Services: path.resolve(resolveApp('src'), 'services'),
      Utils: path.resolve(resolveApp('src'), 'utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      },
    ],
  },
};