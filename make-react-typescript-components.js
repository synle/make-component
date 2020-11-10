#!/usr/bin/env node

require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react-v2-typescript/component', 'index.tsx', true],
        ['templates/react-v2-typescript/style', 'index.scss', true],
    ]
);
