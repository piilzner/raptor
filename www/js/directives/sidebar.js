app.directive('sidebar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'postsFactory', function($scope, postsFactory){
        
    $scope.posts = postsFactory.posts;
        
            //Project name **Make dynamic**
    $scope.projectName = "Raptor CMS Project"

    //User Name ** Make dynamic**
    $scope.user = 'Kent Sten'

    }],
    templateUrl: 'www/views/partials/sidebar.html'
  };    
});