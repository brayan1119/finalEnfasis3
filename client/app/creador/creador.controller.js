'use strict';

angular.module('finalApp')
  .controller('CreadorCtrl', function ($scope,creador) {
    var init = function (){
      creador.getCreador(callbackCreador);
    };

    var callbackCreador = function(data){
      $scope.creador =data;
    };
    init();
  });
