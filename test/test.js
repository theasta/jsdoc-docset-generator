var DocSetGenerator = require('../lib/docset-generator').DocSetGenerator;

var config = {
  destination: "../tmp/",
  name: "MyDocSetJs",
  identifier: "MyDocSet",
  platformFamily: "MyDocSet",
  icon: "fixtures/icon.png",
  documentation: "fixtures/doc",
  entries: [
    {
      name: 'some/module',
      type: 'Module',
      path: 'some.module.html'
    },
    {
      name: 'some/other/module',
      type: 'Module',
      path: 'some.other.module.html'
    }
  ]};


var generator = new DocSetGenerator(config);
generator.create();
