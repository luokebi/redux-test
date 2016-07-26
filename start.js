require('babel-register')({
    presets: ["es2015", "react"]
});

require.extensions['.less'] = function(){return null};

module.exports = require('./server.js');

