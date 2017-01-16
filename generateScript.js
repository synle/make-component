//import
var fs = require('fs');
var path = require('path');
var _ = require('lodash');


//vars
var processCwd = process.cwd();
var outputBashPath = './setup.sh';
var outputBashPathFull = '"' + path.join(processCwd, outputBashPath) + '"';

files = fs.readdirSync('./', function(err, files) {});

console.log('>> processCwd', processCwd)

// only look at files that start with make-
files = files.filter(function(file) {
    return !file.indexOf('make-');
});



var scriptContentBuffer = [];

console.log('>> Processing files:');
files.forEach(function(file) {
    console.log(file);

    // change mod (permission)
    fs.chmodSync(file, '755'); // -rwxr-xr-x


    var commandName = _.trimEnd(file, '.js');

    // make the install script
    scriptContentBuffer.push([
        'function ' + commandName + '(){',
        path.join(processCwd, file) + ' $@',
        '}'
    ].join('\n'));
});


// write to output
fs.writeFileSync(outputBashPath, scriptContentBuffer.join('\n'));
fs.chmodSync(outputBashPath, '755'); // -r-xr-xr-x

console.log('>> Please include the following to your bash profile (~/.bash_profile in Mac or ~/.bashrc in Ubuntu)');
console.log('[ -s ' + outputBashPathFull + ' ] && . ' + outputBashPathFull);




