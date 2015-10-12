angular.module("parse-starter.controllers")
  .controller("GenerateCtrl", function($scope,$state,$ionicPopup,Schedule){
    $scope.listClass = Schedule.getListClass();

    // remove class from list
    $scope.remove = function(each){
      Schedule.removeClass(each);
    };

    //add class to list
    $scope.add = function(){
      $scope.item = {};
      $ionicPopup.confirm({
          title: 'Add class',
          templateUrl: "templates/schedule/add-class.html",
          scope: $scope,
          okType: 'button-balanced'
      }).then(function(res) {
          if(res) {
            Schedule.addClass($scope.item.department,$scope.item.class);
          } else {
          }
      });


    };

});