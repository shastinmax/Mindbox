import { ChangeChecked } from './changeChecked';

describe('changeTodoList', () => {
  it('should return modified TodoList', () => {
    const result = ChangeChecked('5', false);
    expect(result).toStrictEqual({
      type: 'TODO/CHANGE-CHECKED',
      id: '5',
      value: false,
    });
  });
});
