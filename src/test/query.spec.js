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

      expect(actual).toEqual(expected);
    });

    it('Should return { number: 3 } when number=3 passed to it', () => {
      expect(parse('number=3')).toEqual({ number: '3' })
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

      expect(actual).toBe(expected);
    });

    it('Should return ?lang=english when { lang: english } passed to it', () => {
      expect(stringify({ lang: 'english' })).toBe('?lang=english');
    });

    it('Should eliminate null and undefined values passed to it', () => {
      expect(stringify(
        {
          name: undefined,
          age: null,
          guitar: 'fender',
          pick: 'tortex',
        }))
      .toBe('?guitar=fender&pick=tortex');
    });
  })
})
