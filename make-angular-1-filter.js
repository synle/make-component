#!/usr/bin/env node

//includes
require('./index').processWithPrompt(
    'Enter Angular 1 Filter Name',
    [
        ['templates/angular-1/filter', 'Filter.js']
    ]
);

