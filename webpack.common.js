const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// package.json
//"start": "webpack-dev-server --hot --color --progress --info=true --config webpack.dev.js --public https://devel.example.com/console/sockjs-node/",
module.exports = {
  entry: {
    //app: './src/index.js'
    // Doesn't work
    app: [
        //'webpack-dev-server/client?http://' + require("ip").address() + ':8080/',
        //'webpack-dev-middleware/client?https://devel.example.com/console/sockjs-node/',
        'webpack-dev-server/client?https://devel.example.com/sockjs-node/',
        './src/index.js'
        ]
      
    // Doesn't work
    // app: [
    //     'webpack-dev-server/client?http://localhost:9000/console/',
    //     './src/index.js'
    //     ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader?limit=10000', 'img-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
