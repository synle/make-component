// def
var moduleName = 'gggSrvc';
module.exports = moduleName;

angular.module(moduleName, [])
    .factory(
        moduleName,
        function() {
            var gggSrvc = {};

            // method
            gggSrvc.method = function method(){

            };

            // object return
            return gggSrvc;
        });
