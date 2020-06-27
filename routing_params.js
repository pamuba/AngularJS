var app = angular.module("app", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/sumurl/:a/:b", {
      templateUrl: 'sumurl.html',
      controller:'sumurl'
    });
    $routeProvider.when("/suminput", {
        templateUrl: 'suminput.html',
        controller:'suminput'
      });
    $routeProvider.when("/", {
      template: "<strong>Welcole to the APP</strong>",
    });
    $routeProvider.otherwise({
      template: "<strong>No Content Available</strong>",
    });
  },
]);

app.controller('sumurl',['$scope', '$routeParams', function($scope,$routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}]);

app.controller('suminput',['$scope','$location','$interpolate', function($scope,$location,$interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function() {
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        console.log(url)
        $location.path(url);
    }
}]);

