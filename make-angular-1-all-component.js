#!/usr/bin/env node

//includes
require('./index').process([
    ['templates/angular-1/index', 'index.js', true],
    ['templates/angular-1/ctrl', 'Ctrl.js'],
    ['templates/angular-1/drtv', 'Drtv.js'],
    ['templates/angular-1/srvc', 'Srvc.js'],
    ['templates/angular-1/srvc_test', 'Srvc.spec.js'],
    ['templates/angular-1/html', '.html']
]);

