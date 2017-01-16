Make sample code for your angular 1 component from command line
================================================================


## To install
```
function new-angular-component(){
    ~/git/make-angular1-component/make-component.js $@
}
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
require('./make--component')([
    ['template/angular-templates/index.js', 'index.js', true],
    ['template/angular-templates/ctrl.js', 'Ctrl.js'],
    ['template/angular-templates/drtv.js', 'Drtv.js'],
    ['template/angular-templates/srvc.js', 'Srvc.js'],
    ['template/angular-templates/html.js', '.html'],
    ['template/angular-templates/srvc.test.js', 'Srvc.spec.js']
]);
```


## Make script executable
```
# Make script executable
chmod +x your-script.js;

# Make a function in your bash to call it
function make-your-script(){
    ~/git/make-code/your-script.js \
        $@
}
```
