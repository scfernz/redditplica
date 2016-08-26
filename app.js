angular.module('redditplica', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
}])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('mainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
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
