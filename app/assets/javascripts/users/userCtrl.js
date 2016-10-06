angular.module('redditplica')

.controller('UserCtrl', ['$scope', 'posts',
  function($scope, posts) {
    $scope.posts = posts.posts;
  }

]);
