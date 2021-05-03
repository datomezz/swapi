const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer : {
    contentBase : path.join(__dirname, "dist"),
    port : 9000,
    historyApiFallback : true
  },

  module : {
    rules : [
      {
        test : /\.css$/,
        use : ["style-loader", "css-loader"]
      },
      {
        test : /\.s[ca]ss$/,
        use : ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test : /\.(js|jsx)/,
        exclude : /node_modules/,
        use : ["babel-loader"]
      }
    ]
  },

  plugins : [
    new HtmlWebpackPlugin({
      template : path.join(__dirname, "public", "index.html"),
      minify : false
    }),
  ],

  resolve : {
    extensions : ["*", ".js", ".jsx"]
  }
}
