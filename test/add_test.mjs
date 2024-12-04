import { expect } from 'chai';
import add from '../src/add.js'; 

describe('add', function() {
  it('should return the correct sum of two positive numbers', function() {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should return the correct sum of a positive and a negative number', function() {
    const result = add(6, -4);
    expect(result).to.equal(2);
  });

  it('should return the correct sum of two negative numbers', function() {
    const result = add(-6, -4);
    expect(result).to.equal(-10);
  });

  it('should return 0 when both numbers are 0', function() {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });

  it('should return the correct sum when one of the numbers is 0', function() {
    const result = add(6, 0);
    expect(result).to.equal(6);
  });

  it('should return NaN if non-numeric values are passed', function() {
    const result = add('a', 4);
    expect(result).to.be.NaN;
  });
});