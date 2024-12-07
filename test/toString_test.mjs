import { expect } from 'chai';
import toString from '../src/toString.js';


describe('toString', () => {
  it('should return an empty string for null and undefined', () => {
    expect(toString(null)).to.equal('');
    expect(toString(undefined)).to.equal('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should convert numbers to strings', () => {
    expect(toString(42)).to.equal('42');
    expect(toString(3.14)).to.equal('3.14');
  });

  it('should return the same string for string inputs', () => {
    expect(toString('hello')).to.equal('hello');
  });

  it('should convert arrays to comma-separated strings', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString([null, undefined, 4])).to.equal(',,,4');
  });

  it('should handle nested arrays correctly', () => {
    expect(toString([1, [2, [3, 4]]])).to.equal('1,2,3,4');
  });

  it('should convert symbols to their string representation', () => {
    const sym = Symbol('test');
    expect(toString(sym)).to.equal(sym.toString());
  });

  it('should handle objects by converting them to strings', () => {
    const obj = { a: 1 };
    expect(toString(obj)).to.equal('[object Object]');
  });

  it('should handle functions by converting them to strings', () => {
    const func = function testFunc() {};
    expect(toString(func)).to.equal(func.toString());
  });

  it('should handle edge cases like Infinity and NaN', () => {
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(NaN)).to.equal('NaN');
  });
});