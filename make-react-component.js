#!/usr/bin/env node

require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react/component', 'Component.js']
    ]
);
