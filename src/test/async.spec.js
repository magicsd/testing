const assert = require('assert');
const { findUserById, findUserByName } = require('../async');

describe('Test async queries', () => {
  describe('Test findUserById function', () => {
    it('Should return user data by id', async () => {
      const { user } = await findUserById(1);

      assert.equal(user.name, 'Alex');
    });

    it('Should throw an error if user is not found', () => {
      const id = 3939;
      const errorMessage = `User with id ${id} was not found.`;

      return findUserById(id).catch(({ message }) => {
        assert.equal(message, errorMessage);
      });
    });
  });

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

    it('Should throw an error if user is not found', async () => {
      const testName = 'Max'
      const errorMessage = `User with name ${testName} was not found.`;
      const EXPECTED_ERROR = 'EXPECTED_ERROR';

      try {
        await findUserByName(testName);
        assert.fail(EXPECTED_ERROR);
      } catch (e) {
        if (e.message === EXPECTED_ERROR) {
          throw e;
        }
        assert.equal(e.message, errorMessage);
      }
    });
  });
});
