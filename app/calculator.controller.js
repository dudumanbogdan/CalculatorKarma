(function () {
    'use strict';

angular
    .module('calculatorApp')
    .controller('CalculatorController', CalculatorController);

CalculatorController.$inject = ['$scope'];

function CalculatorController($scope) {
    $scope.z = 0;
    $scope.sum = function () {
        $scope.z = $scope.x + $scope.y;
    };
};
})();