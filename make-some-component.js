#!/usr/bin/env node

//includes
require('./make--component')([
    ['sy-setup-files/angular-templates/index_some.js', 'index.js', true],
    ['sy-setup-files/angular-templates/ctrl.js', 'Ctrl.js'],
    ['sy-setup-files/angular-templates/drtv.js', 'Drtv.js'],
    ['sy-setup-files/angular-templates/html.js', '.html'],
]);
