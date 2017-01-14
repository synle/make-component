var moduleName = 'ggg';
module.exports = moduleName;

angular.module(moduleName, [
    require('./gggCtrl'),
    require('./gggDrtv'),
    require('./gggSrvc')
]);
