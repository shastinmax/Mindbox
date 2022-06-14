import React from 'react';

import './App.scss';
import { AddTodoItem } from './componets/addTodoItem/AddTodoItem';
import { TodoListContainer } from './componets/TodoListContainer/TodoListContainer';
import style from './componets/TodoListContainer/TodoListContainer.module.scss';

export const App = () => (
  <div className="App">
    <div className={style.header}>
      <h3 className={style.title}>My ToDo list</h3>

      <div className={style.inner}>
        <AddTodoItem />
      </div>
    </div>
    <TodoListContainer />
  </div>
);

export default App;
