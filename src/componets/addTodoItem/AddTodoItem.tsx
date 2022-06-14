import React, { KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import AddTodo from '../../assets/icon/add-svgrepo-com.svg';
import useInput from '../../hooks/useInput';
import { AddNewTodoList } from '../../store/actionCreators/addNewTodoList/addNewTodoList';
import { DataType } from '../TodoListContainer/types';

import style from './AddTodoItem.module.scss';

const ENTERCHARCODE = 13;

export const AddTodoItem = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);

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
  return (
    <div className={style.wrapper}>
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
  );
};
