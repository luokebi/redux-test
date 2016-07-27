require('babel-register');

require.extensions['.less'] = function(){return null};

module.exports = require('./server.js');

