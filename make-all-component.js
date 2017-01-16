#!/usr/bin/env node

//includes
require('./make--component')([
    ['sy-setup-files/angular-templates/index.js', 'index.js', true],
    ['sy-setup-files/angular-templates/ctrl.js', 'Ctrl.js'],
    ['sy-setup-files/angular-templates/drtv.js', 'Drtv.js'],
    ['sy-setup-files/angular-templates/srvc.js', 'Srvc.js'],
    ['sy-setup-files/angular-templates/html.js', '.html'],
    ['sy-setup-files/angular-templates/srvc.test.js', 'Srvc.spec.js']
]);

