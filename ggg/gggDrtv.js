var moduleName = 'gggDrtv';
module.exports = moduleName;

angular.module(moduleName, [
    'uiq'
])
    .directive('ggg', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: require('./ggg.html'),
            controller: require('./gggCtrl')
        };
    });
