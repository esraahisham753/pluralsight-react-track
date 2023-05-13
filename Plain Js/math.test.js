const add = require('./math');

test('Should return 3 when passed a and 2', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
});