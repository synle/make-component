# Make sample code for your component from command line

## To install

```
cd make-component;
npm i;
npm run build;
```

## To use

`npm run build` makes every `make-*.js` script in this folder executable.

```
# generate react-v2-typescript component files into a target dir
node make-react-typescript-components.js MyComponent /path/to/output/dir
```

## Config

| templateFile | outSuffixName | dontOverrideName | outputFileName     |
| ------------ | ------------- | ---------------- | ------------------ |
| some content | Ctrl.js       | false            | myComponentCtrl.js |
|              | index.js      | true             | index.js           |

## Replacement Strategy

Input file name `My-Component`:

| Token                | Method Used                         | Sample Replacement |
| -------------------- | ----------------------------------- | ------------------ |
| {{ORIG_FNAME}}       |                                     | My-Component       |
| {{CAMEL_FNAME}}      | \_.lowerFirst                       | my-Component       |
| {{DASH_FNAME}}       | \_.kebabCase                        | my-component       |
| {{SNAKE_FNAME}}      | \_.snakeCase                        | my_component       |
| {{UPPERFIRST_FNAME}} | \_.upperFirst                       | My-Component       |
| {{STARTCASE_FNAME}}  | \_.startCase(str).replace(/ /g, '') | MyComponent        |

## Custom "make-component.js"

### Silent Mode (infer the module name from parent base path name)

```
#!/usr/bin/env node

require('./index').process([
    ['templates/react-v2-typescript/component', 'index.tsx']
]);
```

### Prompt Mode (get the module name from cli prompt)

```
#!/usr/bin/env node

require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react-v2-typescript/component', 'Component.tsx']
    ]
);
```

## Make script executable

By default you can run `npm run build`, this will generate the script for files starting with `make-*.js` in this folder needed for running your code.
