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
	return o;
}]);
