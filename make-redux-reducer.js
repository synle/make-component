#!/usr/bin/env node

//includes
require('./index').processWithPrompt(
    'Enter Reducer name',
    [
        ['templates/react/reducer', 'Reducer.js']
    ]
);
