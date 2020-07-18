import reverseString from '../src/reverseString';

it('Reverses the string', () => {
  expect(reverseString('seth')).toBe('htes');
});

it('Does nothing, really', () => {
  expect(reverseString('s')).toBe('s');
});

it('Should throw an error if called without a string', () => {
  expect(() => {
    reverseString(456789);
  }).toThrow('Only use strings');
});
