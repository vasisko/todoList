var assert = require('assert');

// describe('Array', function() {
//     describe('#indexOf()', function() {
//       it('should return -1 when the value is not present', function() {
//         assert.equal([1,2,3].indexOf(4), -1);
//       });
//     });
//   });

describe('Math', function() {
    it('should return 9 when 3*3', function(){
        assert.equal(9, 3*3);
    });
    
    it('should return -8 when (3-4)*8', function(){
        assert.equal(-8, (3-4)*8);
    });
});