'use strict';

angular.module('finalApp')
  .service('creador', function ($http) {
    var self=this;
    self.getCreador = function(callback){
      $http.get('http://greatsource.co/futuro/API/getAll?cedula=1020455974')
        .success(function(data){
          callback(data);
        })
        .error(function(){
          alert('no pude :(');
        });
    }
  });
