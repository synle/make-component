var moduleName = '{{ORIG_FNAME}}Drtv';
module.exports = moduleName;

angular.module(moduleName, [
    'uiq'
])
    .directive('{{CAMEL_FNAME}}', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: require('./{{ORIG_FNAME}}.html'),
            controller: require('./{{ORIG_FNAME}}Ctrl')
        };
    });
