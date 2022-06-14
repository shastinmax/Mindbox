import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import Delete from '../../assets/icon/delete-svgrepo-com.svg';
import { ChangeChecked } from '../../store/actionCreators/changeChecked/changeChecked';
import { RemoveTodoList } from '../../store/actionCreators/removeTodoList/removeTodoList';
import { fixLengthText } from '../../utils/fixLengthText';
import style from '../todoList/TodoList.module.scss';

import { TodoPropsType } from './types';

export const Todo = (props: TodoPropsType) => {
  const dispatch = useDispatch();

  const { id, taskTitle, checked } = props;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onCheckedCLick = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeChecked(id, e.currentTarget.checked));
  };
  const onDeleteClick = (ID: string) => {
    dispatch(RemoveTodoList(ID));
  };

  return (
    <div className={style.inner}>
      <input onChange={e => onCheckedCLick(id, e)} type="checkbox" checked={checked} />
      <h3 className={checked ? 'itemTitle' : ''}>{fixLengthText(taskTitle)}</h3>

      <img
        className={style.icon}
        role="presentation"
        src={Delete}
        onClick={() => onDeleteClick(id)}
        alt="delete"
      />
    </div>
  );
};
