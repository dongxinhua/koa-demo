const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

const webpackConfig = {
  // target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externalsPresets: { node: true }, 
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin()
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