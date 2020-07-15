import capitalize from '../src/capitalize';

it('Capitalizes', () => {
  expect(capitalize('seth')).toBe('Seth');
});

it('Returns only one capitalized letter', () => {
  expect(capitalize('s')).toBe('S');
});

it('Returns nothing', () => {
  expect(capitalize(8079876789)).toBe('');
});

it('Returns nothing', () => {
  expect(capitalize({})).toBe('');
});
