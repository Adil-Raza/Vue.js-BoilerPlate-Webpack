const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')

module.exports = function setupDevSever (app) {
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ]
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  const clientCompiler = webpack(clientConfig)
  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        color: true
      }
    })
  )
  app.use(require('webpack-hot-middleware')(clientCompiler))
}
