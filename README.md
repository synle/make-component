Make sample code for your angular 1 component from command line
================================================================


## To install
```
npm i;
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
| Token           | Method Used | OriginalFileName | Sample Replacement |
|-----------------|-------------|------------------|--------------------|
| {{ORIG_FNAME}}  |             | MyComponent      | MyComponent        |
| {{CAMEL_FNAME}} | _.kebabCase | MyComponent      | myComponent        |
| {{DASH_FNAME}}  | _.snakeCase | MyComponent      | my_component       |



## Custom "make-component.js"
```
#!/usr/bin/env node

//includes
require('./index')([
    ['template/angular-templates/index.js', 'index.js', true],
    ['template/angular-templates/ctrl.js', 'Ctrl.js'],
    ['template/angular-templates/drtv.js', 'Drtv.js'],
    ['template/angular-templates/srvc.js', 'Srvc.js'],
    ['template/angular-templates/html.js', '.html'],
    ['template/angular-templates/srvc.test.js', 'Srvc.spec.js']
]);
```


## Make script executable
By default you can run `npm run build`, this will generate the script for files starting with `make-*.js` in this folder needed for running your code.

If you are hardcore, you can do the following shell script
```
# Make script executable
chmod +x your-script.js;

# Make a function in your bash to call it
function make-your-script(){
    ~/git/make-code/your-script.js \
        $@
}
```
