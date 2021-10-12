const path = require('path');

module.exports = {
  entry: './client/src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client', 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$$/,
        include: [
          path.join(__dirname, 'client', 'src')
        ],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  }
};