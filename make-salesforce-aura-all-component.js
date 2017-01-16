#!/usr/bin/env node

//includes
require('./index').process([
    ['templates/salesforce-aura/cmp', '.cmp'],
    ['templates/salesforce-aura/controller', 'Controller.js'],
    ['templates/salesforce-aura/css', '.css'],
    ['templates/salesforce-aura/helper', 'Helper.js'],
    ['templates/salesforce-aura/renderer', 'Renderer.js'],
    ['templates/salesforce-aura/test', 'Test.js'],
]);
