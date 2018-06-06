var assert = require('assert');
const { expect } = require('chai');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(4)).to.equal(-1);
      // assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
