var moduleName = '____Drtv';
module.exports = moduleName;

angular.module(moduleName, [
    'uiq'
])
    .directive('----', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            template: require('./____.html'),
            controller: require('./____Ctrl')
        };
    });
