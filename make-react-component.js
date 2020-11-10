#!/usr/bin/env node

require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react-v1/component', '.js'],
        ['templates/react-v1/style', '.scss'],
    ]
);
