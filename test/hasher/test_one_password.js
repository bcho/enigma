var should = require('should'),
    OnePasswordHasher = require('../../lib/hasher/one_password');

describe('one password hasher', function() {

    it('should be able to use vanilla options', function() {
        var hasher = new OnePasswordHasher({ masterKey: 'test' });

        hasher.hash('test').should.be.exactly('51abb96360');
    });

    it('should be able to change cipher', function() {
        var hasher = new OnePasswordHasher({
            masterKey: 'test',
            cipher: function(a) { return a; }
        });

        hasher.hash('test').should.be.exactly('testtest');
    });

    it('should be able to use custom formatter', function() {
        var hasher = new OnePasswordHasher({
            masterKey: 's',
            formatter: function(a, b) { return b + a; },
            cipher: function(a) { return a; }
        });

        hasher.hash('f').should.be.exactly('fs');
    });

    it('should be able to specify length', function() {
        var hasher = new OnePasswordHasher({
            masterKey: 'test',
            cipher: function(a) { return a; },
            length: 4
        });

        hasher.hash('test').should.be.exactly('test');
    });

});
