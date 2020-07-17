const arrayAnalysis = (arr = null) => {
  // Because eslint throws an error when using isNaN
  // we found this solution at: https://stackoverflow.com/questions/46677774/eslint-unexpected-use-of-isnan
  const isNumber = (value) => Number.isNaN(Number(value));
  if (arr === null || arr.some(isNumber)) {
    throw new Error('Arrays can only contain numerical values');
  } else {
    return {
      // Because Babel does support spreading, use Array.from with plugins in package.json
      min: Math.min(...Array.from(arr)),
      max: Math.max(...Array.from(arr)),
      lengthArray: arr.length,
      average: arr.reduce((a, b) => a + b, 0) / arr.length,
    };
  }
};

export default arrayAnalysis;
