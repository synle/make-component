#!/usr/bin/env node

//includes
require('./index')([
    ['templates/salesforce-aura/app.template', '.app'],
    ['templates/salesforce-aura/controller.template', 'Controller.js'],
    ['templates/salesforce-aura/css.template', '.css'],
    ['templates/salesforce-aura/helper.template', 'Helper.js'],
    ['templates/salesforce-aura/renderer.template', 'Renderer.js'],
    ['templates/salesforce-aura/test.template', 'Test.js'],
]);
