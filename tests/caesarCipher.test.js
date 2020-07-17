import caesarCipher from '../src/caesarCipher';

it('Encrypt', () => {
  expect(caesarCipher.encrypt('attack at dawn')).toBe('buubdl bu ebxo');
});
it('Decrypt', () => {
  expect(caesarCipher.decrypt('buubdl bu ebxo')).toBe('attack at dawn');
});
it('Checks for wrapping (encrypt)', () => {
  expect(caesarCipher.encrypt('az')).toBe('ba');
});
it('Checks for wrapping (decrypt)', () => {
  expect(caesarCipher.decrypt('ba')).toBe('az');
});
it('Checks for punctuations', () => {
  expect(caesarCipher.encrypt('!@#$%^&*().:')).toBe('!@#$%^&*().:');
});
it('Checks for punctuations (2)', () => {
  expect(caesarCipher.encrypt('!!!attack at dawn...')).toBe(
    '!!!buubdl bu ebxo...',
  );
});
it('Checks for caps (2)', () => {
  expect(caesarCipher.encrypt('!!!Attack at Dawn...')).toBe(
    '!!!Buubdl bu Ebxo...',
  );
});