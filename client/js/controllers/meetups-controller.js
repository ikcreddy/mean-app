app.controller('personController',['$scope','$resource',function($scope,$resource){
  var Meetup = $resource('/api/krish');

    Meetup.query(function(result){
        $scope.meetups = result
    })
   $scope.createData = function(){
        var meetup = new Meetup();
        meetup.name = $scope.meetupName;
        meetup.$save(function(result){
            $scope.meetups.push(result);
        });

    }
}]);
