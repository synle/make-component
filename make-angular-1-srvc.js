#!/usr/bin/env node

//includes
require('./index').process([
    ['templates/angular-1/index_barebone', 'index.js', true],
    ['templates/angular-1/srvc', 'Srvc.js'],
    ['templates/angular-1/srvc_test', 'Srvc.spec.js']
]);

