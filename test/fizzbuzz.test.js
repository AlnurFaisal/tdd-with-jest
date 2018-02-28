const fizzbuzz = require("../src/fizzbuzz");

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});

test("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual('fizz');
});

test('5 should return buzz', () => {
    expect(fizzbuzz(5)).toEqual('buzz');
});



