import { TodoListType } from '../../reducers/todo/types';

export const AddNewTodoList = (data: TodoListType) =>
  ({
    type: 'TODO/ADD-NEW-TODO-LIST',
    data,
  } as const);
