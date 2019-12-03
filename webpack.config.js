var path = require('path')

module.exports = {
  entry: {
    './dist/app': path.resolve(__dirname, 'src/client/index.js'),
  },
  output: {
    filename: 'reviews.js',
    path: path.resolve(__dirname, 'src/public/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
