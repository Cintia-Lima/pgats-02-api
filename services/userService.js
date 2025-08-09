const { users } = require('../models/userModel');

function registerUser({ username, password, favorecido }) {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }
  if (users.find(u => u.username === username)) {
    throw new Error('User already exists');
  }
  const user = { username, password, favorecido: !!favorecido };
  users.push(user);
  return user;
}

function loginUser({ username, password }) {
  if (!username || !password) {
    throw new Error('Username and password are required');
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return user;
}

function getUsers() {
  return users;
}

function getUser(username) {
  return users.find(u => u.username === username);
}

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  getUser,
};
