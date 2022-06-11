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
          },
          ...state.todoLists,
        ],
      };
    }
    default:
      return state;
  }
};
