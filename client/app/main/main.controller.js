'use strict';

angular.module('finalApp')
  .controller('MainCtrl', function ($scope, main,$modal,$log) {

    var init = function (){
      main.getPaises(callbackPaises);
    };
    var callbackPaises = function(data){
      $scope.paises =data;
    };

    init();
  });
