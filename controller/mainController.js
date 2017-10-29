//initialisation du controller
angular.module("inter").controller("mainController", function($scope, joueursFactory){
  $scope.joueurs = joueursFactory.getJoueurs();
});

  
