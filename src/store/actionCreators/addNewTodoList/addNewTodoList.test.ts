import { AddNewTodoList } from './addNewTodoList';

describe('newTodoList', () => {
  it('should return newTodoList', () => {
    const data = {
      filter: 'active',
      checked: true,
      id: '5',
      taskTitle: 'Hello',
    };
    const result = AddNewTodoList(data);
    expect(result).toStrictEqual({
      type: 'TODO/ADD-NEW-TODO-LIST',
      data: {
        id: '5',
        filter: 'active',
        taskTitle: 'Hello',
        checked: true,
      },
    });
  });
});
