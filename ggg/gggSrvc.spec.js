'use strict';

var RiqTestUtil = require('@desktop-testutils/riqTestUtil');

describe('gggSrvc', function() {
    var ToTestSrvc;

    // define the module to test
    beforeEach(function() {
        angular.mock.module(require('./gggSrvc'));
        require('@desktop-testutils/chrome-gmail-mocks')();
    });

    // get injected definition of SFDCInputValidatorSrvc
    beforeEach(inject(function(_gggSrvc_) {
        ToTestSrvc = _gggSrvc_;
    }));

    describe('test_method', function() {
        var methodToTest = 'isValidInput';

        describe('test_scenario', function() {
            var testData = [
                [
                    ['input'],
                    'expected_output',
                    'description'
                ]
            ];

            // run test
            _runTestSuite(testData, methodToTest);
        });
    });


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
