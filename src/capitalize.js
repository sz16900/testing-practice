const capitalize = (str) => {
  if (typeof str !== 'string' || !/^[a-zA-Z]/.test(str)) {
    throw new Error('Only use strings');
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export default capitalize;
