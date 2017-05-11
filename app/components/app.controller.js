(function() {
    'use strict';
    
    function AppCtrl($rootScope, $scope, $mdMedia){
        $scope.message = 'Initial Setup';
        $scope.screenIsXS = $mdMedia('xs');
        $scope.screenIsSM = $mdMedia('sm');
        $scope.screenIsMD = $mdMedia('md');
        $scope.screenIsGTMD = $mdMedia('gt-md');

        $scope.$watch(function () {
            return $mdMedia('xs');
        }, function (big) {
            console.log("screen is XS:" + big);
            $scope.screenIsXS = big;
        });
        
        $scope.$watch(function () {
            return $mdMedia('sm');
        }, function (big) {
            console.log("screen is SM:" + big);
            $scope.screenIsSM = big;
        });
        
        $scope.$watch(function () {
            return $mdMedia('md');
        }, function (big) {
            console.log("screen is MD:" + big);
            $scope.screenIsMD = big;
        });
        
        $scope.$watch(function () {
            return $mdMedia('gt-md');
        }, function (big) {
            console.log("screen is gt-MD:" + big);
            $scope.screenIsGTMD = big;
        });
    };
    
    angular.module('adBoxx')
            .controller('AppCtrl', AppCtrl)
    
})();