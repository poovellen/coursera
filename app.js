(function() {
    'use strict';

    angular.module('DIApp', [])


    .controller('DIController', DIController);


    DIController.$inject = ['$scope', '$filter'];

    function DIController($scope, $filter) {
        $scope.name = "selvissen";
        $scope.cookieCost = .45;


        $scope.sayMessage = function() {
            var msg = "always be positive!!!!";
            var output = $filter('uppercase')(msg);
            return output;

        };

        $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);

        };


    };





})();