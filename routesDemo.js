var app = angular.module('app',['ngRoute'])

//routing configuration-$routeProvider

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/first-msg',{
        // template:"<strong>This is FIRST message</strong>"
        templateUrl:"msg1.html",
        controller:'message1'
    }),
    $routeProvider.when('/second-msg',{
        template:"<strong>This is SECOND message</strong>"
    }),
    $routeProvider.when('/',{
        template:"<strong>This is DEFAULT message</strong>"
    })
    $routeProvider.otherwise({
        template:"<strong>No Content Available</strong>"
    })
}])


app.controller('message1', ['$scope', function($scope){
    $scope.a = 10,
    $scope.b = 20
}]);
