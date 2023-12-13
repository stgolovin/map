const ErrorRepository = require('../app')

let erRep;

beforeAll(() => {
    erRep = new ErrorRepository();
    erRep.repo.set(1, 'You have no sleep.');
    erRep.repo.set(2, 'You have no coffee.');
    erRep.repo.set(3, 'You have no rest.');
});

test('testing function translate with success', () => {
    const result = erRep.translate(3);
    expect(result).toBe('You have no rest.');
});

test('testing function translate with success', () => {
    const result = erRep.translate(4);
    expect(result).toBe('Unknown error');
});
