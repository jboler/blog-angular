'use strict';


var blogApp = angular.module('blogApp', ['blogFilters', 'blogServices', 'ui.directives']);


blogApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/posts', {templateUrl: 'views/posts.html', controller: 'PostsController'}).
    when('/posts/admin', {templateUrl: 'views/all.html', controller: 'AdminPostsController'}).
    when('/posts/admin/:postId/comments', {templateUrl: 'views/comments.html', controller: 'AdminCommentsController'}).
    when('/posts/new', {templateUrl: 'views/edit.html', controller: 'NewPostController'}).
    when('/posts/:postId', {templateUrl: 'views/post.html', controller: 'PostController'}).
    when('/posts/edit/:postId', {templateUrl: 'views/edit.html', controller: 'EditPostController'}).
    otherwise({redirectTo: '/posts'});
}]);