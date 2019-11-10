angular.module('helloworldApp')
    .controller('HomeCtrl', [
        '$scope',
        function ($scope) {
            $scope.message = "New Msg!"
        }
    ]);