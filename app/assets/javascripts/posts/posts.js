angular.module('redditplica')
.factory('posts', [
'$http',

function($http){
	var o = {
		posts: [{title:"hey",upvotes:123}]
	};
	o.getAll = function() {
		return $http.get('/posts.json').success(function(data) {
			angular.copy(data, post);
		});
	};
	o.create = function(post) {
		return $http.post('/posts.json', post).success(function(data) {
			o.post.push(data);
		});
	};
	return o;
}]);
