#!/usr/bin/env node

require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react/component', 'index.js', true],
        ['templates/react/style', 'index.css', true],
    ]
);
