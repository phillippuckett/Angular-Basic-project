var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
   $scope.name = 'Phillip';
$scope.friends = ['Miles', 'Luke', 'TJ']; 
});
