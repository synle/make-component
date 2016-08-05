#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

//get input
var args = process.argv.slice(2);
var fileName = args[0] || process.cwd().substr(process.cwd().lastIndexOf('/') + 1);
var filePath = args[1] || process.cwd();
if(fileName){
	console.log('preparing template for ', fileName, filePath);

	//read file
	var ctrl = _readTemplate('./ctrl.js');
	var drtv = _readTemplate('./drtv.js');
	var srvc = _readTemplate('./srvc.js');
	var index = _readTemplate('./index.js');
	var html = _readTemplate('./html.js');

	//write to file
	_writeTemplate(ctrl, 'Ctrl.js');
	_writeTemplate(drtv, 'Drtv.js');
	_writeTemplate(srvc, 'Srvc.js');
	_writeTemplate(html, '.html');
	_writeTemplate(index, 'index.js', true);
} else {
	console.log('ERROR, no path provided ', fileName, filePath);
}


function _writeTemplate(content, name, dontOverrideName) {
	var dest;

	if(dontOverrideName){
		dest = path.join(filePath, name);
	} else {
		dest = path.join(filePath, fileName + name);
	}

    fs.writeFile(dest, content);
    console.log('>>', dest);
}

function _readTemplate(filePath) {
    var content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
    var directiveName = fileName.replace(/^SFDC/, 'sfdc');
    return content.replace(/____/g, fileName)
				.replace(/----/g, directiveName);
}
