const getLikes = require('./modules/getLikes.js');

  describe('initial', () => {
  test('first tests', () => {
    expect(true).toBe(true)
  })
})  

test('likes to sum 1', () => {
  expect(getLikes(1)).toBe(1);
});
