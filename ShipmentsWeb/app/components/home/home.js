angular.module('shipments.home', [
    'auth0'
])
.controller('HomeCtrl', function ($scope, auth) {
    $scope.shipments = [];
    $scope.auth = auth;
});