var assert = require("assert");
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

var chai = require("chai"); 
var foo = "bar"; 
var tea ={'flavors':[23,32,55]}; 
var assert = chai.assert;

describe('Array', function() {
	assert.typeOf(foo, 'string');
	assert.equal(foo, 'bar');
	assert.lengthOf(foo, 3)
	assert.property(tea, 'flavors');
	assert.lengthOf(tea.flavors, 3);
});
