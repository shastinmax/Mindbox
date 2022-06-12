import React, { KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import { useAppSelector } from '../../hooks/useAppSelectorsHook';
import useInput from '../../hooks/useInput';
import { AddNewTodoList } from '../../store/actionCreators/addNewTodoList/addNewTodoList';
import { FilterType } from '../../store/reducers/todo/types';
import { selectTodoList } from '../../store/selectors/todo';
import { TodoItem } from '../todoItem/TodoItem';

import style from './Todolist.module.scss';
import { DataType } from './types';

const ENTERCHARCODE = 13;

export const Todolist = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState<FilterType>('all');
  const [error, setError] = useState<string | null>(null);

  let todoLists = useAppSelector(selectTodoList);

  const { value, onChange, setValue } = useInput('');
  const data: DataType = {
    id: v1(),
    filter: 'all',
    taskTitle: value,
    checked: false,
  };

  const onAddTodoListClick = () => {
    if (data.taskTitle.trim() !== '') {
      dispatch(AddNewTodoList(data));
      setValue('');
    } else {
      setError('Title is require');
    }
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === ENTERCHARCODE) {
      onAddTodoListClick();
      setValue('');
    }
  };
  const changeFilter = (filterValue: FilterType) => {
    setFilter(filterValue);
  };

  if (filter === 'active') {
    todoLists = todoLists.filter(todo => !todo.checked);
  }
  if (filter === 'completed') {
    todoLists = todoLists.filter(todo => todo.checked);
  }

  return (
    <div className={style.wrapper}>
      <h3>todos</h3>

      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPressHandler}
      />
      <button onClick={onAddTodoListClick} type="button">
        +
      </button>
      {error && <div className={style.errorMessage}>{error}</div>}

      <TodoItem todoLists={todoLists} changeFilter={changeFilter} />
    </div>
  );
};
