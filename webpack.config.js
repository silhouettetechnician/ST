const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {

    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
            {loader: "style-loader"},
            {loader: "css-loader", 
            options:{
              modules:true,
              localIdentName:'[path][name]__[local]--[hash:base64:5]',
            },}
        ],

        exclude: /node_modules/
    },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader']}, 
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: 'file-loader' },
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
    new webpack.EnvironmentPlugin({...process.env})
 
  ]
}


