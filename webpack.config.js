const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        exclude: '/node_modules',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader')
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules',
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};