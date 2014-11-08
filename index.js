var Generator = require('./lib/docset-generator');

var config = require('./jsdoc-dash.conf.json');

var generator = new Generator(config);
generator.createDocSetFolder();