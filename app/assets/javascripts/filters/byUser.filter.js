angular.module('redditplica')

.filter('byUser', function () {
  return function(posts, username) {
    posts.filter(function(e) {
      return e.user.username == username;
    });
  }
})
