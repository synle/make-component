var moduleName = '{{ORIG_FNAME}}';
module.exports = moduleName;

angular.module(moduleName, [
    require('./{{ORIG_FNAME}}Ctrl'),
    require('./{{ORIG_FNAME}}Drtv'),
    require('./{{ORIG_FNAME}}Srvc')
]);
