const path = require('path');

module.exports = {
  port: 3456,
  content: path.resolve(__dirname, 'static'),
  devMiddleware: {
    publicPath: '/dist/',
  },
};
