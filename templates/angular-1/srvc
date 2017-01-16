'use strict';

var RiqTestUtil = require('@common-testutils/riqTestUtil');

describe('{{ORIG_FNAME}}Srvc', function() {
    var ToTestSrvc;

    // define the module to test
    beforeEach(function() {
        angular.mock.module(require('./{{ORIG_FNAME}}Srvc'));
        require('@desktop-testhelper/chrome-gmail-mocks')();
    });

    // get injected definition of SFDCInputValidatorSrvc
    beforeEach(inject(function(_{{ORIG_FNAME}}Srvc_) {
        ToTestSrvc = _{{ORIG_FNAME}}Srvc_;
    }));

    // describe('method', function() {
    //     var methodToTest = 'method';
    //     describe('test_scenario', function() {
    //         var testData = [
    //             [
    //                 ['input'], // input
    //                 undefined, //output
    //                 'description' // description
    //             ]
    //         ];

    //         // run test
    //         _runTestSuite(testData, methodToTest);
    //     });
    // });


    // helper to run test
    function _runTestSuite(testData, methodToTest) {
        RiqTestUtil.runSuiteSimple(
            testData,
            function() { // test function
                return ToTestSrvc[methodToTest].apply(null, arguments);
            }
        );
    }
});


