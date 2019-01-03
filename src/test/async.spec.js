const assert = require('assert');
const { findUserById, findUserByName } = require('../async');

describe('Test async queries', () => {
  describe('Test findUserById function', () => {
    it('Should return user data by id', () => {
      return findUserById(1).then(({ user }) => {
        assert.equal(user.name, 'Alex');
      })
    });
  })

  describe('Test findUserByName function', () => {
    it('Should return user by name', () => (
      findUserByName('Vova').then(({user}) => {
        const expected = {
          id: 2,
          age: 24,
          name: 'Vova',
          email: 'strert@ertert.com',
          registeredOn: '2018-04-12',
        };

        assert.deepEqual(user, expected);
      })
    ));
  })
})
