const { join } = require('path')
const swcDefaultConfig =
  require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory()
    .swcOptions
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin')
const { merge } = require('webpack-merge')

module.exports = () => {
  // Get the base Nx webpack config
  const baseConfig = {
    output: {
      path: join(__dirname, '../../dist/apps/app')
    },
    plugins: [
      // https://nx.dev/recipes/webpack/webpack-plugins#example
      new NxAppWebpackPlugin({
        target: 'node',
        compiler: 'swc',
        main: './src/main.ts',
        tsConfig: './tsconfig.app.json',
        assets: ['./src/assets'],
        optimization: process.env['NODE_ENV'] === 'production',
        outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none'
      })
    ]
  }

  // Modify the base config to use swc-loader
  const customConfig = {
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: {
            loader: 'swc-loader',
            options: swcDefaultConfig
          }
        }
      ]
    }
  }

  return merge(baseConfig, customConfig)
}
