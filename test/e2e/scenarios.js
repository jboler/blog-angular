'use strict';


describe('Blog App', function() {


  beforeEach(function() {
    window.localStorage.removeItem('posts'); // Reset local posts database
  });


  it('should redirect / to /#/posts', function() {
    browser().navigateTo('/');
    expect(browser().location().url()).toBe('/posts');
  });


  describe('Post index', function() {

    beforeEach(function() {
      browser().navigateTo('/#/posts');
    });


    it('should filter the post list as user types into the search box', function() {
      expect(repeater('.posts .post').count()).toBe(4);

      input('query.title').enter('uranium');
      expect(repeater('.posts .post').count()).toBe(2);

      input('query.title').enter('korea');
      expect(repeater('.posts .post').count()).toBe(1);
    });


    it('should render post specific links', function() {
      input('query.title').enter('korea');
      element('.post h2 a').click();
      expect(browser().location().url()).toBe('/posts/1364496945280');
    });
  });


  describe('Post view', function() {

    beforeEach(function() {
      browser().navigateTo('/#/posts/1364496945280');
    });


    it('should display the requested post', function() {
      expect(binding('post.title')).toBe('Top Iranian Nuclear Physicist Present at 3rd North Korean Nuclear Weapons Test');
    });


    it('should allow posting of comments with new comments appearing at top of list', function() {
      input('name').enter('Fred');
      input('comment').enter('Test comment');
      element('form .btn').click();
      expect(repeater('#comments .comment').count()).toBe(1);
      expect(element('#comments .commenter-name:nth-of-type(1)').html()).toBe('Fred');
      expect(element('#comments .comment-text:nth-of-type(1)').html()).toBe('Test comment');


      input('name').enter('Jimmy');
      input('comment').enter('Test comment 2');
      element('form .btn').click();
      expect(repeater('#comments .comment').count()).toBe(2);
      expect(element('#comments .commenter-name:nth-of-type(1)').html()).toBe('Jimmy');
      expect(element('#comments .comment-text:nth-of-type(1)').html()).toBe('Test comment 2');      
    });
  });  


});