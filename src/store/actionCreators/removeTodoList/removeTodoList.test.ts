import { RemoveTodoList } from './removeTodoList';

describe('removeTodoList', () => {
  it('should return removeTodoList', () => {
    const result = RemoveTodoList('5');
    expect(result).toStrictEqual({
      type: 'TODO/REMOVE-TODO-LIST',
      id: '5',
    });
  });
});
