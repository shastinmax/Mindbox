import {combineReducers, createStore} from 'redux';

import {todoReducer} from './reducers/todo/todoReducer';

const reducers = combineReducers({
  todo: todoReducer,
});

export const store = createStore(reducers);
export type AppRootType = ReturnType<typeof reducers>;
