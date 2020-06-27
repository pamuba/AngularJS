var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope, $timeout) {
  function add(x, y) {
    return $timeout(function () { //$timeout by default returns a promise
      return (x + y);
    }, 100);
  }

  var startTime = Date.now();

  //alternate way -- promise chaining
  add(5,2)
        .then(function(result){
          return add(result, 3);//.then block always return a promise
        })
        .then(function(result){
          return add(result, 1);
        })
        .then(function(result){
          $scope.result = result;
          $scope.elapsedTime = Date.now() - startTime;
        })

  // add(5, 2, function (result) {
  //   add(result, 3, function (result) {
  //     add(result, 1, function (result) {
  //       $scope.result = result;
  //       $scope.elapsedTime = Date.now() - startTime;
  //     }, function(error){/**error handling */});
  //   },function(error){/**error handling */});
  // },function(error){/**error handling */});
});
