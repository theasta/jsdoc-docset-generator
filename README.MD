# JSDoc DocSet Generator

Generates a DocSet from JSDoc documentation. This DocSet can be used with the Dasp App.

## Configuration

```javascript
{
  "docSetRoot": "/path/to/docset/output",
  "docSetName": "MyDocSetJs",
  "docSetIdentifier": "MyDocSet",
  "docSetPlatformFamily": "MyDocSet",
  "icon": "/path/to/my/icon.png",
  "documentation": "/path/to/jsdoc/output"
}
```

## Usage

```javascript
var JsdocDocsetGenerator = require('jsdoc-docset-generator'),

var generator = new JsdocDocsetGenerator(
    {
      'documentation': '/path/to/jsdoc/output',
      'docSetRoot': '/path/to/docset/output',
      'docSetName': 'MyDocSetJs',
      'docSetIdentifier': 'MyDocSet',
      'docSetPlatformFamily': 'MyDocSet',
      'icon': '/path/to/my/icon.png'
    });

generator
    .populate(require('/path/to/docset.json'));
```

* `docset.json` can be generated from [jsdoc-dash-template](https://github.com/theasta/jsdoc-dash-template)
