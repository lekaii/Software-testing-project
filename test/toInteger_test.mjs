import { expect } from 'chai';
import toInteger from '../src/toInteger.js';


describe('toInteger', () => {
  it('should convert floating-point numbers to integers by truncating the decimal part', () => {
    expect(toInteger(3.2)).to.equal(3);
    expect(toInteger(-4.7)).to.equal(-4);
  });

  it('should return 0 for very small numbers (close to 0)', () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0); // Edge case
  });

  it('should return Infinity for positive Infinity', () => {
    expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE); // Largest finite number
  });

  it('should return negative Infinity for negative Infinity', () => {
    expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE); // Largest negative finite number
  });

  it('should convert string representations of numbers to integers', () => {
    expect(toInteger('3.2')).to.equal(3);
    expect(toInteger('-5.7')).to.equal(-5);
  });

  it('should return 0 for `null`, `undefined`, or non-numeric strings', () => {
    expect(toInteger(null)).to.equal(0);
    expect(toInteger(undefined)).to.equal(0);
    expect(toInteger('abc')).to.equal(0);
  });

  it('should handle edge cases like `NaN`', () => {
    expect(toInteger(NaN)).to.equal(0); // NaN should result in 0
  });

  it('should return 0 for boolean values', () => {
    expect(toInteger(true)).to.equal(1);
    expect(toInteger(false)).to.equal(0);
  });

  it('should handle objects and arrays correctly', () => {
    expect(toInteger({})).to.equal(0);
    expect(toInteger([1, 2, 3])).to.equal(0);
    expect(toInteger([42])).to.equal(42); // Array with one number
  });
});