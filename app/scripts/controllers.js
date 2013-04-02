'use strict';


blogApp.controller('PostsController', function PostsController($scope, Post) {
  $scope.posts = Post.query();
});


blogApp.controller('PostController', function($scope, $routeParams, $location, Post) {
  $scope.post = Post.query($routeParams.postId);


  $scope.saveComment = function() {
    Post.createComment($scope.post.id, $scope.name, $scope.comment);
    $scope.name = $scope.comment = null;
    $scope.post = Post.query($routeParams.postId);
  };

});


blogApp.controller('NewPostController', function($scope, $location, Post) {
  $scope.post = Post.new();
  $scope.date = new Date();

  $scope.updatePost = function() {
    $scope.post.date = $scope.date.getTime().toString();
    Post.create($scope.post);
    $location.path('/posts/' + $scope.post.id);
  };

});


blogApp.controller('EditPostController', function($scope, $routeParams, $location, Post) {
  $scope.post = Post.query($routeParams.postId);
  $scope.date = new Date(parseInt($scope.post.date, 10));

  $scope.updatePost = function() {
    $scope.post.date = $scope.date.getTime().toString();
    Post.update($scope.post);
    $location.path('/posts/admin');
  };

});


blogApp.controller('AdminPostsController', function($scope, $location, Post) {
  $scope.posts = Post.query();

  $scope.togglePublished = function(post) {
    Post.togglePublished(post.id);
    $scope.posts = Post.query();
  };


  $scope.deletePost = function(post) {
    Post.destroy(post.id);
    $scope.posts = Post.query();
  };

});


blogApp.controller('AdminCommentsController', function($scope, $routeParams, $location, Post) {
  $scope.post = Post.query($routeParams.postId);

  $scope.deleteComment = function(postId, comment) {
    Post.deleteComment(postId, comment);
    $scope.post = Post.query($routeParams.postId);
  };

});