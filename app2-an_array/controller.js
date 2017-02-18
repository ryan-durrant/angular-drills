app.controller("arrayController", function($scope, serviceApp2){
  console.log(serviceApp2.getData());
  $scope.data = serviceApp2.getData();
});
