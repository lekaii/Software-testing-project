import { expect } from 'chai';
import isObject from '../src/isObject.js'; 

describe('isObject', function() {

    describe('Valid objects', function() {

        it('should return true for an object literal', function() {
            const result = isObject({});
            expect(result).to.equal(true);
        });

        it('should return true for an array', function() {
            const result = isObject([4, 5, 2]);
            expect(result).to.equal(true);
        });

        it('should return true for a function', function() {
            const result = isObject(Function);
            expect(result).to.equal(true);
        });

        it('should return true for a regular expression', function() {
            const result = isObject(/test/);
            expect(result).to.equal(true);
        });

        it('should return true for a Date object', function() {
            const result = isObject(new Date());
            expect(result).to.equal(true);
        });
    });

    describe('Non-object primitive types', function() {

        it('should return false for null', function() {
            const result = isObject(null);
            expect(result).to.equal(false);
        });

        it('should return false for a string', function () {
            const result = isObject('test string');
            expect(result).to.equal(false);
        });

        it('should return false for a number', function () {
            const result = isObject(452);
            expect(result).to.equal(false);
        });

        it('should return false for a boolean', function () {
            const result = isObject(true);
            expect(result).to.equal(false);
        });

        it('should return false for undefined', function () {
            const result = isObject(undefined);
            expect(result).to.equal(false);
        });

        it('should return false for NaN', function() {
            const result = isObject(NaN);
            expect(result).to.equal(false);
        });
    });

    describe('Edge cases', function() {

        it('should return true for an object created with Object.create(null)', function() {
            const result = isObject(Object.create(null));
            expect(result).to.equal(true);
        });

        it('should return true for an instance of a class', function() {
            class TestClass {}
            const instance = new TestClass();
            expect(isObject(instance)).to.equal(true);
        });
    });
});
