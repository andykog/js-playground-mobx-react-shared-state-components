var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'app': ['./app'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].js',
    sourceMapFilename: 'debugging/[file].map',
    library: 'reactiform',
    libraryTarget: 'var',
    pathinfo: NODE_ENV === 'development',
  },
  target: 'web',
  module: {
    loaders: [
      {
       test: /\.jsx?$/,
       exclude: /(node_modules)/,
       loader: 'babel?cacheDirectory',
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
      },
    ],
  },
  devtool: 'source-map',
  debug: false,
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules'),
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
  ],
  devServer: {
    contentBase: './',
    historyApiFallback: false,
    stats: {
      cached: false,
      exclude: [],
    },
  },
  watchOptions: {
    poll: true,
  },
};
