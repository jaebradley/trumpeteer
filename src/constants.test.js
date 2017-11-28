import formattedErrorMessage from './constants';

describe('#formattedErrorMessage', () => {
  it('should return formatted error message', () => {
    const expected = '😞 Rut ro! An error occurred - thanks Obama. 😱\nError: foobar';
    expect(formattedErrorMessage('foobar')).toEqual(expected);
  });
});
