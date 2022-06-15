import { AddNewTodoList } from '../../actionCreators/addNewTodoList/addNewTodoList';
import { ChangeChecked } from '../../actionCreators/changeChecked/changeChecked';

import { todoReducer } from './todoReducer';
import { InitialStateType } from './types';
import { RemoveTodoList } from '../../actionCreators/removeTodoList/removeTodoList';

const state: InitialStateType = {
  todoLists: [
    {
      id: '5',
      filter: 'active',
      taskTitle: 'Hello',
      checked: true,
    },
  ],
};
describe('todoReducer', () => {
  it('length post should be incremented', () => {
    const action = AddNewTodoList({
      id: '6',
      filter: 'active',
      taskTitle: 'Hello',
      checked: true,
    });
    const newState = todoReducer(state, action);
    expect(newState.todoLists.length).toBe(2);
  });

  it('field checked should change', () => {
    const action = ChangeChecked('5', false);
    const newState = todoReducer(state, action);
    expect(newState.todoLists[0].checked).toBe(false);
  });

  it('length post should be reduced', () => {
    const action = RemoveTodoList('5');
    const newState = todoReducer(state, action);
    expect(newState.todoLists.length).toBe(0);
  });
});
