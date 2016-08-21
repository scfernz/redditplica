angular.module('redditplica', [])
.controller('mainCtrl', [
  '$scope',
  function($scope){
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 8},
      {title: 'post 3', upvotes: 12},
      {title: 'post 4', upvotes: 94},
      {title: 'post 5', upvotes: 8}
    ];
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {return;}
      else{
        $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
        $scope.title = '';
        $scope.link = '';
      }
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
