const arrayAnalysis = (arr) => {
  if (arr.some(isNaN)) {
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
