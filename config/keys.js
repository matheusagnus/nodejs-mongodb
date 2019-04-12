// decides which database to export when

if (process.env.NODE_ENV === 'test') {
    module.exports = require('./keys_test');
  } else {
    module.exports = require('./keys_dev');
  }
  