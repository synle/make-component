#!/usr/bin/env node

var config = [
    ['sy-setup-files/angular-templates/index_some.js', 'index.js', true],
    ['sy-setup-files/angular-templates/ctrl.js', 'Ctrl.js'],
    ['sy-setup-files/angular-templates/drtv.js', 'Drtv.js'],
    ['sy-setup-files/angular-templates/html.js', '.html'],
]

//includes
require('./make--component')(
    process.argv,
    process.cwd(),
    config
);
