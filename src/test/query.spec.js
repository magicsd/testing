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

    it('Should return { number: 3 } when number=3 passed to it', () => {
      assert.deepEqual(parse('number=3'), { number: '3' });
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
    });

    it('Should return ?lang=english when { lang: english } passed to it', () => {
      assert.equal(stringify({ lang: 'english' }), '?lang=english');
    });

    it('Should eliminate null and undefined values passed to it', () => {
      assert.equal(stringify(
        {
          name: undefined,
          age: null,
          guitar: 'fender',
          pick: 'tortex',
        }),
        '?guitar=fender&pick=tortex'
      );
    });
  })
})
