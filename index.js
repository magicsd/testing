function sum(num1, num2) {
  if (!num1 || !num2) {
    throw new Error('Numbers are required!');
  }

  return num1 + num2;
}

module.exports = {
  sum,
};
