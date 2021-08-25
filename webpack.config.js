const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
      publicPath: '/'
    },
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css?/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
    ],
  },
};
