const path = require('path');
const ENTRYDIR = path.join(__dirname, 'client');
const OUTDIR = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  watch: true,
  entry: `${ENTRYDIR}/index.jsx`,
  output: {
    path: OUTDIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: ENTRYDIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
}