//includes
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function(argv, processCwd, config){
    //get input
    var args = argv.slice(2);
    var fileName = args[0] || processCwd.substr(processCwd.lastIndexOf('/') + 1);
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


    function _writeTemplate(content, name, dontOverrideName) {
        var dest;

        if(!!dontOverrideName){
            dest = path.join(filePath, name);
        } else {
            dest = path.join(filePath, fileName + name);
        }

        fs.writeFile(dest, content);
        console.log('>>', dest);
    }

    function _readTemplate(filePath) {
        var directiveName = fileName.replace(/^SFDC/, 'sfdc');
        var dashCaseName = _.kebabCase(directiveName);
        var underscoreCaseName = _.snakeCase(directiveName);


        console.log(path.join(__dirname, filePath));
        var content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
        return content.replace(/{{ORIG_FNAME}}/g, fileName)
                    .replace(/{{CAMEL_FNAME}}/g, directiveName)
                    .replace(/{{DASH_FNAME}}/g, dashCaseName);
    }
}
