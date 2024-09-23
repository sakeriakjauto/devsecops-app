// test/test_app.js
const assert = require('chai').assert;
const helloWorld = require('../app');

describe('App', function() {
    it('should return Hello, World!', function() {
        assert.equal(helloWorld(), 'Hello, World!');
    });
});
