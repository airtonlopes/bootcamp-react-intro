const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js" // Arquivo com código transpilado para javascript que o browser entende
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, // css head
          { loader: "css-loader" } // css imports
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
