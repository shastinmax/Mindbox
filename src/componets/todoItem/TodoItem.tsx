import { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { ChangeChecked } from '../../store/actionCreators/changeChecked/changeChecked';
import { RemoveTodoList } from '../../store/actionCreators/removeTodoList/RemoveTodoList';

import style from './TodoItem.module.scss';
import { TodoItemType } from './types';

export const TodoItem = (props: TodoItemType) => {
  const { todoLists, changeFilter } = props;

  const dispatch = useDispatch();

  const onCheckedCLick = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeChecked(id, e.currentTarget.checked));
  };
  const onDeleteClick = (ID: string) => {
    dispatch(RemoveTodoList(ID));
  };
  const onAllClickHandler = () => changeFilter('all');
  const onActiveClickHandler = () => changeFilter('active');
  const onCompletedClickHandler = () => changeFilter('completed');

  return (
    <div>
      {todoLists.map(({ id, taskTitle, filter, checked }) => (
        <div className={style.inner} key={id}>
          <input
            onChange={e => onCheckedCLick(id, e)}
            type="checkbox"
            checked={checked}
          />
          <h1>
            {taskTitle} {filter}
          </h1>

          <button onClick={() => onDeleteClick(id)} type="button">
            X
          </button>
        </div>
      ))}
      <button onClick={onAllClickHandler} type="button">
        All
      </button>
      <button onClick={onActiveClickHandler} type="button">
        Active
      </button>
      <button onClick={onCompletedClickHandler} type="button">
        Completed
      </button>
    </div>
  );
};
