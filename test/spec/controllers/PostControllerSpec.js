'use strict';


describe('PostController', function() {
  var scope, ctrl;


  beforeEach(module(function($provide) {
    $provide.service('Post', function() {
      var posts = {"1364496945277": {"id": '1364496945277', "title": 'Post 1', "comments": []}};

      this.query = function(id) {
        return posts[id];
      };

      this.createComment = function(id, name, comment) {
        posts[id].comments.push({name: name, comment: comment, date: (new Date).getTime()});
      };

    });
  }));


  beforeEach(inject(function($rootScope, $controller, $routeParams) {
    $routeParams.postId = '1364496945277';
    scope = $rootScope.$new();
    ctrl = $controller('PostController', {$scope: scope});
  }));


  it('should load post id 1364496945277', function() {
    expect(scope.post.title).toEqual('Post 1');
  });


  describe('saveComment', function() {

    it('should save the comment to the post', function() {
      scope.name = 'Fred';
      scope.comment = 'Test Comment';
      scope.saveComment();

      expect(scope.post.comments.length).toEqual(1);
      expect(scope.post.comments[0].name).toEqual('Fred');
      expect(scope.post.comments[0].comment).toEqual('Test Comment');
    });


    it('should clear the comment form', inject(function($location) {
      scope.name = 'Fred';
      scope.comment = 'Test Comment';
      scope.saveComment();

      expect(scope.name).toEqual(null);
      expect(scope.comment).toEqual(null);
    }));
  });  


});