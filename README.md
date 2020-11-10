Make sample code for your angular 1 component from command line
================================================================


## To install
```
cd make-component;
npm i;
npm run build;
```


## To use
```
    # cd to the component dir
    mkdir MyComp
    cd MyComp
    new-angular-component
```


## Config
| templateFile | outSuffixName | dontOverrideName | outputFileName     |
|--------------|---------------|------------------|--------------------|
| some content | Ctrl.js       | false            | myComponentCtrl.js |
|              | index.js      | true             | index.js           |



## Replacement Strategy
| Token                 | Method Used | OriginalFileName | Sample Replacement |
|-----------------------|-------------|------------------|--------------------|
| {{ORIG_FNAME}}        |             | MyComponent      | MyComponent        |
| {{CAMEL_FNAME}}       | _.kebabCase | MyComponent      | myComponent        |
| {{DASH_FNAME}}        | _.snakeCase | MyComponent      | my_component       |
| {{UPPERFIRST_FNAME}}  | _.upperFirst| MyComponent      | MyComponent       |




## Custom "make-component.js"
### Silent Mode (infer the module name from parent base path name)
```
#!/usr/bin/env node

//includes
require('./index').process([
    ['templates/angular-1/html', '.html']
]);
```

### Prompt Mode (get the module name from cli prompt)
```
#!/usr/bin/env node

require('./index').processWithPrompt(
    'Enter React Component name',
    [
        ['templates/react/component', 'Component.js']
    ]
);
```


## Make script executable
By default you can run `npm run build`, this will generate the script for files starting with `make-*.js` in this folder needed for running your code.

If you are hardcore, you can do the following shell script
```
# Make script executable
chmod +x make-your-script.js;

# Make a function in your bash to call it
function make-your-script(){
    ~/git/make-code/make-your-script.js \
        $@
}
```
