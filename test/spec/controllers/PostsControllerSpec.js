'use strict';


describe('PostsController', function() {
  var scope, ctrl;


  beforeEach(module(function($provide) {
    $provide.service('Post', function() {
      var posts = [{"title": "Post 1"}, {"title": "Post 2"}];

      this.query = function() {
        return posts;
      };

    });
  }));


  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('PostsController', {$scope: scope});
  }));


  it('should load 2 posts from Post service', function() {
    expect(scope.posts.length).toEqual(2);
  });


});