'use strict';


describe('Post', function() {
  var Post, simpleStorage;


  beforeEach(module(function($provide) {
    $provide.service('simpleStorage', function() {
      var storage = {};
      storage.posts = {"1364496945277": {"id": '1364496945277', "title": 'Post 1', "published": true, "comments": [{"date": '1364496945277', "name": 'Fred', "comment": 'Comment here.'}]}};

      this.getItem = function(id) {
        return storage[id];
      };

      this.setItem = function(id, data) {
        delete storage[id];
        storage[id] = data;
      };

    });
  }));


  beforeEach(inject(function(_Post_, _simpleStorage_) {
    Post = _Post_;
    simpleStorage = _simpleStorage_;
  }));


  it('Post.query() should return an array of all Posts', function() {
    expect(Post.query().length).toEqual(1);
    expect(Post.query()[0].title).toEqual('Post 1');
  });


  it('Post.query("1364496945277") should return Post 1364496945277', function() {
    expect(Post.query('1364496945277').title).toEqual('Post 1');
  });


  it('Post.new() should return an object with blank properties', function() {
    var post = Post.new();

    expect(post.id).toEqual(null);
    expect(post.title).toEqual(null);
    expect(post.date).toEqual(null);
    expect(post.published).toEqual(true);
    expect(post.body).toEqual(null);
    expect(post.comments.length).toEqual(0);
  });


  it('Post.create() should add the post object to simpleStorage', function() {
    var post = {title: 'Post 2', date: null, published: true, body: 'Post Body 2', comments: []};
    Post.create(post);
    var posts = simpleStorage.getItem('posts');

    expect(Object.keys(posts).length).toEqual(2);
    expect(posts[post.id].title).toEqual('Post 2');
  });


  it('Post.update() should update the post object in simpleStorage', function() {
    var post = Post.query('1364496945277');
    post.title = 'The First Post';
    Post.update(post);
    var posts = simpleStorage.getItem('posts');

    expect(posts['1364496945277'].title).toEqual('The First Post');
  });


  it('Post.destroy() should remove the post from simpleStorage', function() {
    Post.destroy('1364496945277');
    var posts = simpleStorage.getItem('posts');

    expect(Object.keys(posts).length).toEqual(0);
  });


  it('Post.togglePublished() should toggle the published property in simpleStorage', function() {
    var post = Post.query('1364496945277');
    var published = post.published;
    Post.togglePublished('1364496945277');
    var posts = simpleStorage.getItem('posts');

    expect(posts['1364496945277'].published).toEqual(!published);
  });


  it('Post.createComment() should add a comment to the post in simpleStorage', function() {
    Post.createComment('1364496945277', 'Jimmy', 'This is a comment');
    var posts = simpleStorage.getItem('posts');
    var comments = posts['1364496945277'].comments;

    expect(comments.length).toEqual(2);
    expect(comments[1].name).toEqual('Jimmy');
  });


  it('Post.deleteComment() should delete the comment from the post in simpleStorage', function() {
    Post.deleteComment('1364496945277', {date: '1364496945277'});
    var posts = simpleStorage.getItem('posts');
    var comments = posts['1364496945277'].comments;

    expect(comments.length).toEqual(0);
  });   


});