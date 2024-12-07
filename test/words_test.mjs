import { expect } from 'chai';
import words from '../src/words.js';

describe('words', () => {
  it('should split a string into words based on default pattern', () => {
    expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
    expect(words('hello world!')).to.deep.equal(['hello', 'world']);
  });

  it('should split a string into words using a custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    expect(words('123-456-789', /\d+/g)).to.deep.equal(['123', '456', '789']);
  });

  it('should return an empty array for an empty string', () => {
    expect(words('')).to.deep.equal([]);
  });

  it('should handle strings with special characters', () => {
    expect(words('!@#$%^&*()')).to.deep.equal([]);
    expect(words('foo@bar.com')).to.deep.equal(['foo', 'bar', 'com']);
  });

  it('should handle strings with mixed alphanumeric characters', () => {
    expect(words('abc123')).to.deep.equal(['abc123']);
    expect(words('foo123bar')).to.deep.equal(['foo123bar']);
  });

  it('should return an empty array for null or undefined', () => {
    expect(words(null)).to.deep.equal([]);
    expect(words(undefined)).to.deep.equal([]);
  });

  it('should return an empty array for non-string inputs', () => {
    expect(words(12345)).to.deep.equal([]);
    expect(words({ key: 'value' })).to.deep.equal([]);
    expect(words(['array'])).to.deep.equal([]);
  });
});