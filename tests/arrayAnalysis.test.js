import arrayAnalysis from '../src/arrayAnalysis';

it('Finds the average', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

it('Finds the min', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

it('Finds the max', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

it('Finds the length', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).lengthArray).toBe(6);
});

it('Should throw an error if called without a number', () => {
  expect(() => {
    arrayAnalysis([1, 8, 3, 4, 'sadsa', 2, 6]).lengthArray;
  }).toThrow('Arrays can only contain numerical values');
});
