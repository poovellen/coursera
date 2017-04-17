(function() {
    'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstcontroller', function($scope) {
        $scope.name = "selvissen";
        $scope.sayhello = function() {
            return "hello its me";

        }

    });


})();