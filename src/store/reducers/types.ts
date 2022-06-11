import { AddNewTodoList } from '../actionCreators/addNewTodoList/addNewTodoList';
import { ChangeChecked } from '../actionCreators/changeChecked/changeChecked';
import { RemoveTodoList } from '../actionCreators/removeTodoList/RemoveTodoList';

export type GlobalType =
  | ReturnType<typeof AddNewTodoList>
  | ReturnType<typeof ChangeChecked>
  | ReturnType<typeof RemoveTodoList>;
