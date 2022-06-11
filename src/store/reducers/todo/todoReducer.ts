import { GlobalType } from '../types';

import { InitialStateType } from './types';

const initialState: InitialStateType = {
  todoLists: [],
};

export const todoReducer = (
  state: InitialStateType = initialState,
  action: GlobalType,
): InitialStateType => {
  switch (action.type) {
    case 'TODO/ADD-NEW-TODO-LIST': {
      return {
        ...state,
        todoLists: [
          {
            id: action.data.id,
            filter: action.data.filter,
            taskTitle: action.data.taskTitle,
            checked: action.data.checked,
          },
          ...state.todoLists,
        ],
      };
    }
    case 'TODO/CHANGE-CHECKED': {
      return {
        ...state,
        todoLists: state.todoLists.map(todo =>
          todo.id === action.id ? { ...todo, checked: action.value } : todo,
        ),
      };
    }
    case 'TODO:REMOVE-TODO-LIST': {
      return {
        ...state,
        todoLists: state.todoLists.filter(todo => todo.id !== action.id),
      };
    }
    default:
      return state;
  }
};
