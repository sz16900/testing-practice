const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Only use strings');
  } else {
    return str.split('').reverse().join('');
  }
};
export default reverseString;
