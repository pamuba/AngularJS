var app = angular.module("app", []);

app.controller("emp", function ($scope, $q) {
    $scope.msg = "This is message from directive"
});

app.directive("myInfoMsg", function(){
    return{
        templateUrl:"my-info-msg.html"
    }
})