require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react-v2-typescript/component', 'index.tsx', true],
        ['templates/react-v2-typescript/style', 'index.module.scss', true],
    ]
);
