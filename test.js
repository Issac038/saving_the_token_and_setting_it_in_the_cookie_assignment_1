const { encrypt, decrypt } = require('./script');

const payload = { userId: 123, role: 'admin' };
const token = encrypt(payload);
console.log('Encrypted Token:', token);

const decoded = decrypt(token);
console.log('Decrypted Payload:', decoded);

if (decoded && decoded.userId === payload.userId) {
  console.log('✅ Success: Encryption and decryption work correctly!');
} else {
  console.log('❌ Error: Something went wrong.');
}
