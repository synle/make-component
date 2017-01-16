// def
var moduleName = '{{ORIG_FNAME}}Srvc';
module.exports = moduleName;

angular.module(moduleName, [])
    .factory(
        moduleName,
        function() {
            var {{ORIG_FNAME}}Srvc = {};

            // method
            {{ORIG_FNAME}}Srvc.method = function method(){

            };

            // object return
            return {{ORIG_FNAME}}Srvc;
        });
