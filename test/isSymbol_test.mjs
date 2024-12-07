import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js'; 

describe('isSymbol', function() {

    describe('Valid symbols', function() {

        it('should return true for a symbol', function() {
            const result = isSymbol(Symbol());
            expect(result).to.equal(true);
        });

        it('should return true for a symbol iterator', function() {
            const result = isSymbol(Symbol.iterator);
            expect(result).to.equal(true);
        });

        it('should return true for a symbol object', function() {
            const result = isSymbol(Object(Symbol()));
            expect(result).to.equal(true);
        });
    });

    describe('Non-symbol primitive types', function() {

        it('should return false for a string', function() {
            const result = isSymbol('test stringmood');
            expect(result).to.equal(false);
        });

        it('should return false for an array', function() {
            const result = isSymbol([4, 5, 2]);
            expect(result).to.equal(false);
        });

        it('should return false for a number', function() {
            const result = isSymbol(123);
            expect(result).to.equal(false);
        });

        it('should return false for a boolean', function() {
            const result = isSymbol(true);
            expect(result).to.equal(false);
        });

        it('should return false for a null', function() {
            const result = isSymbol(null);
            expect(result).to.equal(false);
        });

        it('should return false for an undefined', function() {
            const result = isSymbol(undefined);
            expect(result).to.equal(false);
        });
    });

    describe('Non-symbol object types', function() {

        it('should return false for an object', function() {
            const result = isSymbol({a: 1, b: 2});
            expect(result).to.equal(false);
        });

        it('should return false for an array', function() {
            const result = isSymbol([4, 5, 2]);
            expect(result).to.equal(false);
        });

        it('should return false for a function', function() {
            const result = isSymbol(function() { return 3; });
            expect(result).to.equal(false);
        });

        it('should return false for a date', function() {
            const result = isSymbol(new Date());
            expect(result).to.equal(false);
        });
    });
});