'use strict';


describe('filter', function() {


  beforeEach(module('blogFilters'));


  describe('checkCross', function() {
    it('should convert boolean values to unicode checkmark or cross',
      inject(function(checkCrossFilter) {
        expect(checkCrossFilter(true)).toBe('\u2713');
        expect(checkCrossFilter(false)).toBe('\u2718');
      })
    );
  });

  
});