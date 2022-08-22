const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { v4: uuidV4 } = require('uuid');

const hash = uuidV4().replace(/-/g, '');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src', 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../s3', hash),
  },
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /.*\.(gif|png|jp(e*)g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 21000,
              name: 'images/[name]_[hash:7].[ext]'
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}

console.log('Hash: ', hash);
