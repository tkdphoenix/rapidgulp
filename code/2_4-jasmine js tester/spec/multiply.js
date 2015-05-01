var multiply = require('../src/multiply');

describe('multiply', function () {
  it('multiplies two numbers together', function () {
    expect(multiply(2, 3)).toEqual(6);
  });
});
