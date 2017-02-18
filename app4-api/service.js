app4.service("app4Service", function($http){
  this.getData = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people'
    }).then(function(response){
      console.log("Ryan:", response.data.results);
      var urlArray = response.data.results.map(function(element){
        return element.homeworld;
      });
      getDataArray(urlArray);
      return response.data.results;
    });
  };

  function helper(url){
    return $http({
      method: 'GET',
      url: url
    }).then(function(response){
      console.log(response.data);
      return response.data;
    });
  }

  function getDataArray(urlArray){
    urlArray.forEach(function(homeworld){
      return helper(homeworld);
    });

  }

});
