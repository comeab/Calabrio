const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  watch:true,
  watchOptions: {
    ignored: ['/node_modules/']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
