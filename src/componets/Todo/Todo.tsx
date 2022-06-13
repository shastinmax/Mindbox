import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import Delete from '../../assets/icon/delete-svgrepo-com.svg';
import { ChangeChecked } from '../../store/actionCreators/changeChecked/changeChecked';
import { RemoveTodoList } from '../../store/actionCreators/removeTodoList/removeTodoList';
import style from '../todoItem/TodoItem.module.scss';

import { TodoType } from './types';

export const Todo = (props: TodoType) => {
  const dispatch = useDispatch();
  const { todoLists } = props;

  const onCheckedCLick = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeChecked(id, e.currentTarget.checked));
  };
  const onDeleteClick = (ID: string) => {
    dispatch(RemoveTodoList(ID));
  };
  return (
    <div>
      {todoLists.map(({ id, taskTitle, checked }) => (
        <div className={style.inner} key={id}>
          <input
            onChange={e => onCheckedCLick(id, e)}
            type="checkbox"
            checked={checked}
          />
          <h3 className={checked ? 'itemTitle' : ''}>{taskTitle}</h3>

          <img
            className={style.icon}
            role="presentation"
            src={Delete}
            onClick={() => onDeleteClick(id)}
            alt="delete"
          />
        </div>
      ))}
    </div>
  );
};
