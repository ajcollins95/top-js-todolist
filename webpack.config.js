const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
      },
    ]
  },
  
  devServer: {
    contentBase: './dist',
    watchContentBase: true
  }
};