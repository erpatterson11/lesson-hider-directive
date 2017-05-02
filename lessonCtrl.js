angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService){

$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

$scope.test = "Two way binding!"

$scope.announceDay = function(lesson, day) {
  if (lesson && day) {
  alert(lesson + " is on " + day + ".");
} else {
  alert(lesson + " is not scheduled");
}
}


}); // --------------------------------------------------------------------------------------------
