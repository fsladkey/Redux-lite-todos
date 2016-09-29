var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, 'public', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", '.jsx']
  }
};
