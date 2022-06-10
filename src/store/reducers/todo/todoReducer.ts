import {InitialStateType} from './types';

const initialState = {
  todoList: [],
};

export const todoReducer = (
  state: InitialStateType = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
