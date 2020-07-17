const caesarCipher = (() => {
  const encrypt = (str) => {
    let result = '';
    [...str].forEach((char) => {
      // filter out any non alpabetical character
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0);
        // wrap it
        if (charCode === 90) {
          char = 'A';
        } else if (charCode === 122) {
          char = 'a';
        } else {
          char = String.fromCharCode(charCode + 1);
        }
      }
      result += char;
    });
    return result;
  };
  const decrypt = (str) => {
    let result = '';
    [...str].forEach((char) => {
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0);
        // wrap it
        if (charCode === 65) {
          char = 'Z';
        } else if (charCode === 97) {
          char = 'z';
        } else {
          char = String.fromCharCode(charCode - 1);
        }
      }
      result += char;
    });
    return result;
  };
  return {
    encrypt,
    decrypt,
  };
})();
export default caesarCipher;
