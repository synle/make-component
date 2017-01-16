#!/usr/bin/env node

//includes
require('./index')([
    ['templates/angular-1/index.js', 'index.js', true],
    ['templates/angular-1/ctrl.js', 'Ctrl.js'],
    ['templates/angular-1/drtv.js', 'Drtv.js'],
    ['templates/angular-1/srvc.js', 'Srvc.js'],
    ['templates/angular-1/html.js', '.html'],
    ['templates/angular-1/srvc.test.js', 'Srvc.spec.js']
]);

