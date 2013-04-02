'use strict';


describe('simpleStorage', function() {
  var simpleStorage, $window;


  beforeEach(inject(function(_simpleStorage_, _$rootScope_, _$window_) {
    simpleStorage = _simpleStorage_;
    $window = _$window_;
  }));


  it('should save & retrieve JSON objects to & from localStorage', function() {
    $window.localStorage.removeItem('123');
    simpleStorage.setItem('123', {"a": "test"});
    expect(simpleStorage.getItem('123').a).toBe('test');
  });


  it('should delete items from localStorage', function() {
    simpleStorage.removeItem('123');
    expect(simpleStorage.getItem('123')).toBe(null);
  });


});
