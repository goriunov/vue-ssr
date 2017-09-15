const base = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = merge(base, {
  entry: {
    app: './src/entry-client.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => (/node_modules/.test(module.context) && !/\.css$/.test(module.request))
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
    new VueSSRClientPlugin()
  ]
})

module.exports = config
