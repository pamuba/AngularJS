var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope, $timeout) {
  function add(x, y, callback) {
    $timeout(function () {
      callback(x + y);
    }, 100);
  }

  var startTime = Date.now();
  add(5, 2, function (result) {
    add(result, 3, function(result){
      $scope.result = result;
      $scope.elapsedTime = Date.now()-startTime;
    })
  });
});
