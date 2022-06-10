import {TodoListType} from '../../reducers/todo/types';
import {AppRootType} from '../../store';

export const selectTodoList = (state: AppRootType): TodoListType[] => state.todo.todoList;
