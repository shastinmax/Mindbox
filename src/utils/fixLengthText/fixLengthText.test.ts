import { fixLengthText } from './fixLengthText';

describe('fixLengthText', () => {
  it('', () => {
    const result = fixLengthText('hello hello hello hello hello hello hello hello');
    expect(result.length).toBe(13);
    expect(result).toBe('hello hell...');
  });
});
