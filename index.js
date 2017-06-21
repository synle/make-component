// public lib
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

// private lib
var commandPrompt = require('./commandPrompt');


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

    function _writeTemplate(content, name, dontOverrideName) {
        var dest;

        if(!!dontOverrideName){
            // use whatever name they passed
            // index.js
            dest = path.join(filePath, name);
        } else {
            // use concat logics to get the name with the suffix
            //      say filename is MyComponent
            //      and suffix name is Controller
            //      ===================================================
            //      finally the resulting name is MyComponentController
            dest = path.join(filePath, fileName + name);
        }

        fs.writeFileSync(dest, content);
        console.log('>>', dest);
    }

    function _readTemplate(filePath) {
        var directiveName = _.lowerFirst(fileName.replace(/^SFDC/, 'sfdc'));
        var dashCaseName = _.kebabCase(directiveName);
        var underscoreCaseName = _.snakeCase(directiveName);


        console.log(path.join(__dirname, filePath));
        var content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
        return content.replace(/{{ORIG_FNAME}}/g, fileName)
                    .replace(/{{CAMEL_FNAME}}/g, directiveName)
                    .replace(/{{DASH_FNAME}}/g, dashCaseName);
    }
}


function _getParsedConfig(config) {
    if(!config){
        throw 'config is required for processing function';
    }

    var parsedConfig = config;
    if(!_.isArray(config)){
        // is of type objects...
        // if it is not an array, then translate it
        parsedConfig = [
            config.templateFile,
            config.outSuffixName,
            config.fileRenameFunc
        ];
    }
    // else {
    //     //config is an array of 3 items
    //         //1. templateFile
    //         //2. outSuffixName
    //         //3. dontOverrideName
    // }
}

module.exports = {
    // this allow prompt for entering names...
    processWithPrompt: function processWithPrompt(promptName, config){
        commandPrompt(promptName)
            .then(function(fileName){
                _process(config, fileName);
            });
    },

    // silent process, no prompt for module name
    process: function process(config){
        _process(config);
    }
}
