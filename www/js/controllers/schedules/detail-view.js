angular.module('parse-starter.controllers')
  .controller('myScheduleCtrl', function (ParseData,$ionicHistory,$ionicLoading,$scope,$state,$ionicPopup,$ionicModal,Schedule,_,Cart){
    /*
     * prepare to pull schedules data from api
     */
    $scope.$on("$ionicView.beforeEnter", function () {
    var temp = Schedule.getSchedule();
    console.log(temp);
    var classList = Cart.getAll();

    if(temp.length > 0){
        


        $scope.schedules = Schedule.getSchedule();
        console.log("Schedules are:....");
        console.log($scope.schedules);


      /*
       *  Save schedule to current user
      */
        $scope.saveToCloud = function(){

          setTimeout(function() {
            $ionicLoading.show({template:'<ion-spinner></ion-spinner>'});
            ParseData.saveSchedule(Schedule.getSchedule());
            next();
          }, 10);
          function next(){
          $ionicLoading.hide();
          $ionicHistory.nextViewOptions({
            disableBack: true
          });

          $state.go("main.dashboard");
          }
        };
          
         

    } else { 
      $ionicPopup.alert({
        title: "Oops",
        template: "You have no schedule yet",
        okType:'button button-clear button-outline'

      });
      $state.go('main.dashboard');
    }

    });  /*end of $scope.on */



  })


  .controller('conflictMessageCtrl',function(_,$scope,Schedule){
    $scope.conflicts = Schedule.getConflict();

    $scope.load = function(){
      $scope.conflicts = Schedule.getConflict();


    }

    $scope.$on("$ionicView.beforeEnter", function () {
          $scope.conflicts = Schedule.getConflict();

    }); 

  })


  .controller('settingCtrl',function($scope,$localstorage,semesterAPI,classAPI){
    /**
     *
     * Cache basic semester and course catalogs to local storage
     *
     */

    // $scope.load = function(){
    //   console.log("Caching....");
    //   semesterAPI.getAll(cache).then(function(d){
    //     $localstorage.set('semesters',d.data);
    //     cache(d.data);

    //   });

    //   classAPI.getAll().then(function(d){
    //     $localstorage.set('courses',d.data);
    //   });
    //   function cache(){
    //      console.log("Semesters cached :" + $localstorage.get("semesters").length);
    //     console.log("Courses cached :" + $localstorage.get("courses").length);
    //     console.log("Done caching...");
    //   }

    // }

    $scope.clean =function(){
      console.log("Clear caching...");
      $localstorage.clear();

      console.log("Clear done");
    }
  })


  .controller('dashBoardCtrl',function($scope,$ionicPopup,$state,Schedule){
    console.log(Schedule.getSchedule());

    $scope.$on("$ionicView.beforeEnter", function () {

      if($localstorage.get('semesters') === undefined ){
    console.log("Caching....");
      semesterAPI.getAll(cache).then(function(d){
        $localstorage.set('semesters',d.data);
        cache(d.data);

      });

      classAPI.getAll().then(function(d){
        $localstorage.set('courses',d.data);
      });
      function cache(){
         console.log("Semesters cached :" + $localstorage.get("semesters").length);
        console.log("Courses cached :" + $localstorage.get("courses").length);
        console.log("Done caching...");
        $ionicPopup.alert({
          title: "Connection succeeds",
          content: "Cached",
          okType: "button button-clear"
        });
      }

    }
    });

  })
