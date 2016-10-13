angular.module('redditplica')

.controller('MainCtrl', [
  '$scope',
  'posts',
  '$state',
  'Auth',
  function($scope, posts, $state, Auth){
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {return;}
      else{
        posts.create({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      }
    };
    $scope.incrementUpvotes = function(post) {
      posts.upvote(post);
    }
    $scope.decrementUpvotes = function(post) {
      posts.downvote(post);
    }
  }]);
