const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "9000";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // https: true,
    // https: {
    //   key: fs.readFileSync('/etc/nginx/ssl.key'),
    //   cert: fs.readFileSync('/etc/nginx/ssl.crt'),
    //   ca: fs.readFileSync('/etc/apache2/certwork/ssl-bundle.crt')
    // },

      
    // https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we/43621275#43621275
    // Make specific to host?
    disableHostCheck: true,  // ???? added
    //
    // Below works to resolve 404 "console/app.bundle.js"
    publicPath: '/console/',

    // proxy: {
    //   '/**': {
    //     target: 'http://localhost:8080',
    //     secure: false
    //   }
    // },
    //socket: 'socket',
      
    contentBase: "./dist",
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    open: true,
    clientLogLevel: 'info'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});
