const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const webpack = require('webpack');

const { APP_PATH, DIST_PATH } = require('./util')

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(APP_PATH, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '..', '/node_modules')]
      }
    ]
  },
  externalsPresets: { node: true }, 
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.nev': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
      }
    })
  ],
  // node: {
  //   console: true,
  //   global: true,
  //   process: true,
  //   Buffer: true,
  //   __filename: true,
  //   __dirname: true,
  //   setImmediate: true,
  //   path: true
  // }
}

module.exports = webpackConfig;