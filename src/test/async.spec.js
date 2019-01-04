const { findUserById, findUserByName } = require('../async');

describe('Test async queries', () => {
  describe('Test findUserById function', () => {
    it('Should return user data by id', async () => {
      const { user } = await findUserById(1);

      expect(user.name).toBe('Alex');
    });

    it('Should throw an error if user is not found', () => {
      const id = 3939;
      const errorMessage = `User with id ${id} was not found.`;

      return findUserById(id).catch(({ message }) => {
        expect(message).toBe(errorMessage);
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

        expect(user).toEqual(expected);
      })
    ));

    it('Should throw an error if user is not found', async () => {
      const testName = 'Max'
      const errorMessage = `User with name ${testName} was not found.`;
      const EXPECTED_ERROR = 'EXPECTED_ERROR';

      try {
        await findUserByName(testName);
        throw new Error(EXPECTED_ERROR);
      } catch (e) {
        if (e.message === EXPECTED_ERROR) {
          throw e;
        }
        expect(e.message).toBe(errorMessage);
      }
    });
  });
});
