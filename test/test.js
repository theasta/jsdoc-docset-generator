var Generator = require('../lib/docset-generator');

var config = require('./jsdoc-dash.conf.json');


var entries = [
    {
        "name": 'some/module',
        "type": 'Module',
        "path": 'some.module.html'
    },
    {
        "name": 'some/other/module',
        "type": 'Module',
        "path": 'some.other.module.html'
    }
];

new Generator(config, entries);