var browserify = require('browserify');
var fs = require('fs');

var files = [ './src/index.js', './src/page2.js' ];
var b = browserify(files);
b.plugin('factor-bundle', { outputs: [ './index.js', './page2.js' ] });
b.bundle().pipe(fs.createWriteStream('./common.js'));
