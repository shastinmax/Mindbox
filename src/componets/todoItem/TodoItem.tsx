import { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { ChangeChecked } from '../../store/actionCreators/changeChecked/changeChecked';

import { TodoItemType } from './types';

export const TodoItem = (props: TodoItemType) => {
  const { todoLists } = props;

  const dispatch = useDispatch();

  const onCheckedCLick = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeChecked(id, e.currentTarget.checked));
  };

  return (
    <div>
      {todoLists.map(({ id, taskTitle, filter, checked }) => (
        <div key={id}>
          <h1>
            {taskTitle} {filter}
          </h1>
          <input
            onChange={e => onCheckedCLick(id, e)}
            type="checkbox"
            checked={checked}
          />
          <button type="button">X</button>
        </div>
      ))}
    </div>
  );
};
