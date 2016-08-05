#!/usr/bin/env node

var config = [
    ['sy-setup-files/angular-templates/index.js', 'index.js', true],
    ['sy-setup-files/angular-templates/ctrl.js', 'Ctrl.js'],
    ['sy-setup-files/angular-templates/drtv.js', 'Drtv.js'],
    ['sy-setup-files/angular-templates/srvc.js', 'Srvc.js'],
    ['sy-setup-files/angular-templates/html.js', '.html'],
    ['sy-setup-files/angular-templates/srvc.test.js', 'Srvc.spec.js']
]

//includes
//includes
require('./make--component')(
    process.argv,
    process.cwd(),
    config
);

