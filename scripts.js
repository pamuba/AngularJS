var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope, $q) {
  function add(x, y) {
    var q = $q.defer()//returns the angular promise
    setTimeout(function () { //$timeout by default returns a promise
      var result = x+y;
      if(result >= 0)
       {q.resolve(x + y);}
      else
       {q.reject('negative value: '+result)}
    }, 100);
    return q.promise;
  }

  var startTime = Date.now();

  //alternate way -- promise chaining
  add(5,2)
        .then(function(result){
          return add(result, 3);//.then block always return a promise
        })
        .then(function(result){
          return add(result, -10);
        })
        // .then(function(result){
        //   return Array(result).join('*');//can return any data type
        // })
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
