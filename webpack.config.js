const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public', 'dist'),
      publicPath: '/dist/'
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                 presets: ['@babel/preset-env', '@babel/preset-react'],
                 plugins: ['@babel/plugin-proposal-class-properties'] 
              }
          }
      }, {
          test: /\.s?css$/,
          use: [ MiniCssExtractPlugin.loader, 
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ],
      }]
  },
    plugins: [
      new MiniCssExtractPlugin({ 
          filename: 'styles.css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
      historyApiFallback: true,
    },
    mode: 'development'
  };
}
