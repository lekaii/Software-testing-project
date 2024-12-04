import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq', function() {
  it('should return true when comparing a value to itself', function() {
    const object = { 'a': 1 };
    expect(eq(object, object)).to.be.true;
  });

  it('should return false when comparing two different objects', function() {
    const object1 = { 'a': 1 };
    const object2 = { 'a': 1 };
    expect(eq(object1, object2)).to.be.false;
  });

  it('should return true for identical values', function() {
    expect(eq('a', 'a')).to.be.true;
  });

  it('should return false when comparing a string with an object wrapping the same string', function() {
    expect(eq('a', Object('a'))).to.be.false;
  });

  it('should return true for NaN compared to NaN', function() {
    expect(eq(NaN, NaN)).to.be.true;
  });

  it('should return false when comparing NaN with a non-NaN value', function() {
    expect(eq(NaN, 1)).to.be.false;
  });

  it('should return true for two null values', function() {
    expect(eq(null, null)).to.be.true;
  });
});