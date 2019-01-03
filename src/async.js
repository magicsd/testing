const users = require('./db/users');

const QUERY_TIME = 1500;

const findUserById = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = users.find(user => user.id === id);

    if (!user) {
      return reject(new Error(`User with id ${id} was not found.`))
    }

    return resolve({
      message: 'User was found successfully!',
      user,
    })
  }, QUERY_TIME);
});

const findUserByName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = users.find(user => user.name === name);

    if (!user) {
      return reject(new Error(`User with name ${name} was not found.`))
    }

    return resolve({
      message: 'User was found successfully!',
      user,
    })
  }, QUERY_TIME);
});

module.exports = {
  findUserById,
  findUserByName,
};
