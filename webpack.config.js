const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options:{presets:['@babel/preset-env','@babel/preset-react']}
            
         }
      ]
   }
}
