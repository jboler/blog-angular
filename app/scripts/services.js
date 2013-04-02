'use strict';


var blogServices = angular.module('blogServices', []);


// In production we would check for the existence of localStorage

blogServices.service('simpleStorage', ['$window', function($window) {

  this.setItem = function(key, value) {
    $window.localStorage.setItem(key, JSON.stringify(value));
  };

  this.getItem = function(key) {
    var value = $window.localStorage.getItem(key);
    return value && JSON.parse(value);
  };

  this.removeItem = function(key) {
    $window.localStorage.removeItem(key);
  };

}]);


// In practice one would probably use a server side backend
// This is for local experimentation with data bindings

blogServices.service('Post', ['$rootScope', 'simpleStorage', function($rootScope, simpleStorage) {
  var self = this;

  if(!simpleStorage.getItem('posts')) {
    simpleStorage.setItem('posts', seedData); // Initialize with sample data if there's no posts
  }

  var posts = simpleStorage.getItem('posts');


  self.query = function(id) {

    if(id) {
      return angular.copy(posts[id]); // Copy to avoid data binding on object reference

    } else {

      var result = [];

      angular.forEach(posts, function(post, id) {
        result.push(post);
      });

      return result;
    }
  };


  self.new = function() {

    return {
      id: null, title: null, date: null, published: true, body: null, comments: []
    };

  };


  self.create = function(post) {

    var id = (new Date()).getTime().toString();
    post.id = id;
    posts[id] = post;

  };


  self.update = function(post) {

    posts[post.id] = post;

  };


  self.destroy = function(id) {

    delete posts[id];

  };


  self.togglePublished = function(id) {

    posts[id].published = !posts[id].published;

  };


  self.createComment = function(id, name, comment) {

    posts[id].comments.push({name: name, comment: comment, date: (new Date()).getTime()});

  };


  self.deleteComment = function(postId, comment) {

    var comments = posts[postId].comments;

    for(var i = 0; i < comments.length; i++) {
      if(comments[i].date == comment.date) {
        comments.splice(i, 1);
        return;
      }
    }

  };


  $rootScope.$watch(function() {return posts;}, function() {
    simpleStorage.setItem('posts', posts);
  }, true);


}]);