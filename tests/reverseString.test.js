import reverseString from '../src/reverseString';

it('Reverses the string', () => {
  expect(reverseString('seth')).toBe('htes');
});

it('Returns nothing', () => {
  expect(reverseString(12233)).toBe('');
});

it('Does nothing, really', () => {
  expect(reverseString('s')).toBe('s');
});
