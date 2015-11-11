angular.module('shipments.home', [
    'auth0'
])
.controller('HomeCtrl', function ($scope) {
    $scope.shipments = [];
});