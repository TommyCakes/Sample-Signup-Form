
angular.module('myApp', [])
  .directive('optIn', function(){
    return {
      restrict: 'E',
      // templateUrl: 'info.html',
      transclude:true,
      templateUrl: 'templates/info.html',
    }
  })
  .directive('footer', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/footer.html'
    }
  })

//
// angular.module('myApp', [])
//   .directive('welcome', function(){
//     return {
//       restrict: 'E',
//       // scope: {},
//       transclude: true,
//       template: "<div>This is a welcome component</div><ng-transclude></ng-transclude>"
//     }
//   });
