var path = require('path');

require('blanket')({
  	pattern: function (filename) {
        return !(/node_modules/.test(filename)||/test/.test(filename));
    }
});