app4.controller("mainCtrl", function($scope, app4Service){
  $scope.getData = function(){
    app4Service.getData().then(function(responseResults){
      $scope.data = responseResults;
  });
};
  $scope.getData();

});
