const assert = require('assert');

const { parse, stringify } = require('../stringParser');

describe('String Transform Function', () => {
  describe('Parse function', () => {
    it('Should return object when string passed to it', () => {
      const query = '?name=alex-the-great&key=&pass=123&date=12.12.2012&allow=false';
      const actual = parse(query);
      const expected = {
        name: 'alex-the-great',
        key: '',
        pass: '123',
        date: '12.12.2012',
        allow: 'false',
      };

      assert.deepEqual(actual, expected);
    });
  })

  describe('Stringify function', () => {
    it('Should return query string without empty values when object passed to it ', () => {
      const initialObject = {
        name: 'alex-the-great',
        key: '',
        pass: '123',
        date: '12.12.2012',
        allow: 'false',
      }
      const actual = stringify(initialObject);
      const expected = '?name=alex-the-great&pass=123&date=12.12.2012&allow=false';

      assert.equal(actual, expected);
    })
  })
})
