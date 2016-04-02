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
    extensions: ['', '.js', '.jsx', '.ts'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    new webpack.ProvidePlugin({}),
  ],
  devServer: {
    contentBase: './',
    historyApiFallback: false,
    stats: {
      cached: false,
      exclude: [],
    },
    host: "localhost.com",
    port: 8080,
  },
  watchOptions: {
    poll: true,
  },
};

if (NODE_ENV === 'production') {
  module.exports.plugins = module.exports.plugins.concat([
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ]);
}
