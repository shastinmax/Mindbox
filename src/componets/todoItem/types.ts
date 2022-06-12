import { FilterType, TodoListType } from '../../store/reducers/todo/types';

export type TodoItemType = {
  todoLists: TodoListType[];
  changeFilter: (filterValue: FilterType) => void;
};
