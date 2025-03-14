const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { algorithm: 'HS256', expiresIn: '1h' });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};

module.exports = { encrypt, decrypt };
