import { expect } from 'chai';
import toFinite from '../src/toFinite.js';


describe('toFinite', () => {

    describe('Valid numbers', function() {
            
        it('should return a number for a number', function() {
            const result_positive = toFinite(4.52);
            const result_negative = toFinite(-4.52);
            expect(result_positive).to.equal(4.52);
            expect(result_negative).to.equal(-4.52);
        });
        
        it('should return a number for a number string', function() {
            const result = toFinite('4.52');
            expect(result).to.equal(4.52);
        });

        it('should return the number 5e-324 for Number.MIN_VALUE', function() {
            const result = toFinite(Number.MIN_VALUE);
            expect(result).to.equal(5e-324);
        });

        it('should return the maximum integer for Infinity', function() {
            const result = toFinite(Infinity);
            expect(result).to.equal(1.7976931348623157e+308);
        });

        it('should return -Infinity for -Infinity', function() {
            const result = toFinite(-Infinity);
            expect(result).to.equal(-1.7976931348623157e+308);
        });

        it('should return 0 for 0', function() {
            const result = toFinite(0);
            expect(result).to.equal(0);
        });

        it('should return a number for a binary string', function() {
            const result = toFinite('0b101');
            expect(result).to.equal(5);
        });

        it('should return a number for a hexadecimal string', function() {
            const result = toFinite('0x1F');
            expect(result).to.equal(31);
        });

        it('should return a number for an octal string', function() {
            const result = toFinite('0o77');
            expect(result).to.equal(63);
        });

        it('should return the number for a number string with whitespace', function() {
            const result = toFinite('  2  ');
            expect(result).to.equal(2);
        });

        it('should return the number from an object with a custom valueOf method', function() {
            const obj = { valueOf: () => 42 };
            expect(toFinite(obj)).to.equal(42);
        });

        it('should return 1 for boolean true', function() {
            const result = toFinite(true);
            expect(result).to.equal(1);
        });

        it('should return 0 for boolean false', function() {
            const result = toFinite(false);
            expect(result).to.equal(0);
        });
    });

    describe('Falsey values', function() {

        it('should return 0 for null', function() {
            const result = toFinite(null);
            expect(result).to.equal(0);
        });

        it('should return 0 for undefined', function() {
            const result = toFinite(undefined);
            expect(result).to.equal(0);
        });

        it('should return 0 for false', function() {
            const result = toFinite(false);
            expect(result).to.equal(0);
        });

        it('should return 0 for an empty string', function() {
            const result = toFinite('');
            expect(result).to.equal(0);
        });

        it('should return 0 for NaN', function() {
            const result = toFinite(NaN);
            expect(result).to.equal(0);
        });

        it('should return 0 for a non-number string', function() {
            const result = toFinite('test string');
            expect(result).to.equal(0);
        });
    });
});