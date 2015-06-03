'use strict';

angular.module('finalApp')
  .service('main', function ($http) {
    var self=this;
    self.getPaises = function(callback){
      $http.get('http://restcountries.eu/rest/v1/all')
        .success(function(data){
        callback(data);
      })
        .error(function(){
          alert('no pude :(');
        });
    };

  });
