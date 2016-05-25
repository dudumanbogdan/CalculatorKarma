describe('calculator', function () {

	var $controller;
		
	beforeEach(angular.mock.module('calculatorApp'));

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));
    
    it('1 + 1', function() {
        expect(1 + 1).toBe(2);
    });

	describe('sum', function () {
		it('1 + 1 should equal 2', function () {
			var $scope = {};
			var controller = $controller('CalculatorController', { $scope: $scope });
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
		});	
	});
});