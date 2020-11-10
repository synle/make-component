//includes
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const commandPrompt = require('./commandPrompt')

function _process(config, fileName, argv, processCwd){
    // default input
    argv = argv || process.argv;
    processCwd = processCwd || process.cwd();

    //get input
    var args = argv.slice(2);
    fileName = fileName || args[0] || processCwd.substr(processCwd.lastIndexOf('/') + 1);
    var filePath = args[1] || processCwd;
    if(fileName){
        console.log('preparing template for ', fileName, filePath);

        config.map(function(configOption){
            var templateFile = configOption[0];
            var outSuffixName = configOption[1];
            var dontOverrideName = configOption[2];

            var templateContent = _readTemplate(templateFile);

            console.log(templateFile, outSuffixName, templateContent.length);
            _writeTemplate(templateContent, outSuffixName, dontOverrideName);
        });
    } else {
        console.log('ERROR, no path provided ', fileName, filePath);
    }


    // all done. exit
    process.exit(0);


    // private funcs
    function _writeTemplate(content, name, dontOverrideName) {
        var dest;

        if(!!dontOverrideName){
            dest = path.join(filePath, name);
        } else {
            dest = path.join(filePath, fileName + name);
        }

        fs.writeFileSync(dest, content);
        console.log('>>', dest);
    }

    function _readTemplate(filePath) {
        var directiveName = _.lowerFirst(fileName.replace(/^SFDC/, 'sfdc'));
        var dashCaseName = _.kebabCase(directiveName);
        var underscoreCaseName = _.snakeCase(directiveName);

        var upperFirstName = _.upperFirst(fileName);


        console.log(path.join(__dirname, filePath));
        var content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
        return content.replace(/{{ORIG_FNAME}}/g, fileName)
                    .replace(/{{CAMEL_FNAME}}/g, directiveName)
                    .replace(/{{DASH_FNAME}}/g, dashCaseName)
                    .replace(/{{SNAKE_FNAME}}/g, underscoreCaseName)
                    .replace(/{{UPPERFIRST_FNAME}}/g, upperFirstName);
    }
}


module.exports = {
    // this will ask for module name
    processWithPrompt: (promptName, config) => {
        commandPrompt(promptName)
            .then((fileName) => _process(config, fileName));
    },
    // silent process, no prompt for module name
    process: (config) => _process(config)
}
