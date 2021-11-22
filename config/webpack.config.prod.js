const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base.js')

const terserPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new terserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 是否注释掉 console
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        parallel: true,
        // sourceMap: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackConfig