angular.module('directivePractice').directive('lessonHider', function(){


  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lessons: '=',
      buttonText: '@',
      dayAlert: '&'
    },
    controller: function( $scope, lessonService ) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function( scope, element, attributes ) {
      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(day) {
              console.log(scope.lessons, day.lesson, day.weekday)
          if(scope.lessons.includes(day.lesson)) {
            scope.lessonDay = day.weekday;
            element.css('text-decoration','line-through')
          }
        })
      });
    }
  }



}); // --------------------------------------------------------------------------------------------
