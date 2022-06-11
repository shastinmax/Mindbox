import React from 'react';

import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import { useAppSelector } from '../../hooks/useAppSelectorsHook';
import useInput from '../../hooks/useInput';
import { AddNewTodoList } from '../../store/actionCreators/addNewTodoList/addNewTodoList';
import { TodoListType } from '../../store/reducers/todo/types';
import { selectTodoList } from '../../store/selectors/todo';
import { TodoItem } from '../todoItem/TodoItem';

type DataType = TodoListType;

export const Todolist = () => {
  const dispatch = useDispatch();
  const todoLists = useAppSelector(selectTodoList);

  const { value, onChange } = useInput('');
  const data: DataType = {
    id: v1(),
    filter: 'all',
    taskTitle: value,
  };

  const onAddTodoListClick = () => {
    dispatch(AddNewTodoList(data));
  };
  return (
    <div>
      <h3>todos</h3>

      <input type="text" value={value} onChange={onChange} />
      <button onClick={onAddTodoListClick} type="button">
        Add todoList
      </button>

      <TodoItem todoLists={todoLists} />
    </div>
  );
};
