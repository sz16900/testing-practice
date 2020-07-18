import capitalize from '../src/capitalize';

it('Capitalizes', () => {
  expect(capitalize('seth')).toBe('Seth');
});

it('Returns only one capitalized letter', () => {
  expect(capitalize('s')).toBe('S');
});

it('Returns a capitalise letter', () => {
  expect(capitalize('S')).toBe('S');
});

it('Should throw an error if called without a string', () => {
  expect(() => {
    capitalize(123456789);
  }).toThrow('Only use strings');
});

it('Should throw an error if called without a string', () => {
  expect(() => {
    capitalize('!@#&');
  }).toThrow('Only use strings');
});

it('Should throw an error if called with first char a symbol or non-alphabet', () => {
  expect(() => {
    capitalize('!abc');
  }).toThrow('Only use strings');
});

it('Should be fine with symbols after the first char at string ', () => {
  expect(capitalize('sass!')).toBe('Sass!');
});
