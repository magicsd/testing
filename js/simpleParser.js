function parse(queryString) {
  let string = queryString;

  if (queryString[0] === '?') {
    string = queryString.substring(1);

    const queries = string.split('&');

    const params = {};

    queries.forEach(query => {
      const queryParts = query.split('=');

      params[queryParts[0]] = queryParts[1];
    });

    return params;
  }
}

function removeEmpty(params) {
  const paramsObject = {...params};

  Object.keys(params).forEach(key => {
      if (!paramsObject[key]) {
        delete paramsObject[key];
      }
  })

  return paramsObject;
}

function stringify(paramsObject) {
  const filteredObject = removeEmpty(paramsObject);
  const params = Object.keys(filteredObject).map(key => `${key}=${filteredObject[key]}`);
  return `?${params.join('&')}`;
}

const params = parse('?name=alex-the-great&key=&pass=123');
console.log('params=', params);
console.log('filtered=', removeEmpty(params));
console.log('string=', stringify(params));
