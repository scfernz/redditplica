angular.module('redditplica')

.controller('PostsCtrl', [
  '$scope', '$stateParams', 'posts',
  function($scope, $stateParams, posts) {
    $scope.posts = posts.posts;

    $scope.post = posts.posts[$stateParams.id - 1];

    $scope.addComment = function() {
      if($scope.body === '') { return; }
      posts.addComment($scope.post.id, {
        body: $scope.body,
        author: 'user',
      }).success(function(comment) {
        $scope.post.comments.push(comment);
      });
      $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment){
      posts.upvoteComment($scope.post, comment);
    };
}])
