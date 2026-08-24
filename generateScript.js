var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var processCwd = process.cwd();
var outputBashPath = './setup.sh';
var outputBashPathFull = '"' + path.join(processCwd, outputBashPath) + '"';

files = fs.readdirSync('./');

console.log('>> processCwd', processCwd);

// only look at files that start with make-
files = files.filter(function (file) {
  // TODO: find a better convention...
  return !file.indexOf('make-');
});

var scriptContentBuffer = [];
var scriptContentHelpBuffer = [];

console.log('>> Processing files:');
files.forEach(function (file) {
  console.log(file);

  fs.chmodSync(file, '755'); // -rwxr-xr-x

  var commandName = _.trimEnd(file, '.js');

  scriptContentBuffer.push(
    ['function ' + commandName + '(){', path.join(processCwd, file) + ' $@', '}'].join('\n'),
  );

  scriptContentHelpBuffer.push(commandName);
});

scriptContentHelpBuffer =
  'function make-help(){\n echo """' + scriptContentHelpBuffer.join('\n') + '\n"""\n}';

fs.writeFileSync(outputBashPath, scriptContentBuffer.concat(scriptContentHelpBuffer).join('\n'));
fs.chmodSync(outputBashPath, '755'); // -rwxr-xr-x

console.log(
  '>> Please include the following to your bash profile (~/.bash_profile in Mac or ~/.bashrc in Ubuntu)',
);
console.log("echo '[ -s " + outputBashPathFull + ' ] && . ' + outputBashPathFull + "'");
