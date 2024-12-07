import { expect } from 'chai';
import toNumber from '../src/toNumber.js'; 

describe('toNumber', function() {

    describe('Valid numbers', function() {
            
            it('should return a number for a number', function() {
                const result = toNumber(4.52);
                expect(result).to.equal(4.52);
            });
            
            it('should return a number for a number string', function() {
                const result = toNumber('4.52');
                expect(result).to.equal(4.52);
            });

            it('should return the number 5e-324 for Number.MIN_VALUE', function() {
                const result = toNumber(Number.MIN_VALUE);
                expect(result).to.equal(5e-324);
            });
    
            it('should return Infinity for Infinity', function() {
                const result = toNumber(Infinity);
                expect(result).to.equal(Infinity);
            });

            it('should return -Infinity for -Infinity', function() {
                const result = toNumber(-Infinity);
                expect(result).to.equal(-Infinity);
            });

            it('should return a number for a binary string', function() {
                const result = toNumber('0b101');
                expect(result).to.equal(5);
            });

            it('should return a number for a hexadecimal string', function() {
                const result = toNumber('0x1F');
                expect(result).to.equal(31);
            });

            it('should return the number for a number string with whitespace', function() {
                const result = toNumber('  2  ');
                expect(result).to.equal(2);
            });

            it('should return the number from an object with a custom valueOf method', function() {
                const obj = { valueOf: () => 42 };
                expect(toNumber(obj)).to.equal(42);
            });
    });

    describe('Invalid numbers', function() {
            
        it('should return NaN for a symbol', function() {
            const result = toNumber(Symbol());
            expect(result).to.be.NaN;
        });
        
        it('should return NaN for an object', function() {
            const result = toNumber({a: 1, b: 2});
            expect(result).to.be.NaN;
        });

        it('should return NaN for an object with a non-numeric valueOf', function() {
            const obj = { valueOf: () => 'abc' };
            expect(toNumber(obj)).to.be.NaN;
        });

        it('should return NaN for undefined', function() {
            const result = toNumber(undefined);
            expect(result).to.be.NaN;
        });

        it('should return 0 for null', function() {
            const result = toNumber(null);
            expect(result).to.equal(0);
        });

        it('should return NaN for NaN', function() {
            const result = toNumber(NaN);
            expect(result).to.be.NaN;
        });
    });
});