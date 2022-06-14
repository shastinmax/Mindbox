import React, { useState } from 'react';

import { useAppSelector } from '../../hooks/useAppSelectorsHook';
import { FilterType } from '../../store/reducers/todo/types';
import { selectTodoList } from '../../store/selectors/todo';
import { Button } from '../common/button/Button';
import { TodoList } from '../todoList/TodoList';

import style from './TodoListContainer.module.scss';

export const TodoListContainer = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  let todoLists = useAppSelector(selectTodoList);

  const changeFilter = (filterValue: FilterType) => {
    setFilter(filterValue);
  };

  const onAllClickHandler = () => changeFilter('all');
  const onActiveClickHandler = () => changeFilter('active');
  const onCompletedClickHandler = () => changeFilter('completed');

  const buttons = [
    {
      title: 'All',
      className: `btn btn_green ${filter === 'all' ? style.allActive : ''}`,
      callback: onAllClickHandler,
    },
    {
      title: 'Active',
      className: `btn  ${filter === 'active' ? style.active : ''}`,
      callback: onActiveClickHandler,
    },
    {
      title: 'Completed',
      className: `btn btn_red  ${filter === 'completed' ? style.completedActive : ''}`,
      callback: onCompletedClickHandler,
    },
  ];

  if (filter === 'active') {
    todoLists = todoLists.filter(todo => !todo.checked);
  }
  if (filter === 'completed') {
    todoLists = todoLists.filter(todo => todo.checked);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.button_wrapper}>
        {buttons.map(({ title, className, callback }) => (
          <Button key={title} title={title} className={className} callback={callback} />
        ))}
      </div>

      <TodoList todoLists={todoLists} />
    </div>
  );
};
