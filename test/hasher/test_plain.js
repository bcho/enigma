var should = require('should'),
    PlainHasher = require('../../lib/hasher/plain');

describe('plain hasher', function() {
    var hasher = new PlainHasher();
    
    it('should hash plain text', function() {
        var pt = ct = 'hello';

        hasher.hash(pt).should.be.exactly(ct);
    });

});
