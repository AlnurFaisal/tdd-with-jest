const kebabize = require("../src/kebabize");
test('h should return h', () => {
 expect(kebabize('h')).toEqual('h'); 
});

test("gH should return g-h", function() {
  expect(kebabize("gH")).toEqual("g-h");
});

test("hiThereBruceWayne shuld be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toEqual("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
