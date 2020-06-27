var app = angular.module('app',['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
       template:"<strong>Welcole to the APP</strong>"
    })
    $routeProvider.otherwise({
        template:"<strong>No Content Available</strong>"
     })
}])
