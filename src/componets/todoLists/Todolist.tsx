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

import AddTodo from 'assets/icon/add-svgrepo-com.svg';

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
      <div className={style.header}>
        <h3 className={style.title}>My TODO list</h3>

        <div className={style.inner}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPressHandler}
            placeholder="add new todo..."
            className={style.input}
          />
          <img
            onClick={onAddTodoListClick}
            className={style.icon}
            role="presentation"
            src={AddTodo}
            alt="addTodo"
          />
        </div>

        {error && <div className={style.errorMessage}>{error}</div>}
      </div>

      <TodoItem todoLists={todoLists} changeFilter={changeFilter} />
    </div>
  );
};
