import { AddNewTodoList } from '../actionCreators/addNewTodoList/addNewTodoList';
import { ChangeChecked } from '../actionCreators/changeChecked/changeChecked';

export type GlobalType =
  | ReturnType<typeof AddNewTodoList>
  | ReturnType<typeof ChangeChecked>;
