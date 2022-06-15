import { FilterType, TodoListType } from '../../store/reducers/todo/types';

export const todoListFiltering = (array: TodoListType[], value: FilterType) => {
  if (value === 'active') {
    // eslint-disable-next-line no-param-reassign
    array = array.filter(todo => !todo.checked);
  }
  if (value === 'completed') {
    // eslint-disable-next-line no-param-reassign
    array = array.filter(todo => todo.checked);
  }
};
