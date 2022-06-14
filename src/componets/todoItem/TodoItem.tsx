import React from 'react';

import { Todo } from '../todo/Todo';

import { TodoType } from './types';

export const TodoItem = (props: TodoType) => {
  const { todoLists } = props;
  return (
    <div>
      {todoLists.map(({ id, taskTitle, checked }) => (
        <Todo key={id} id={id} taskTitle={taskTitle} checked={checked} />
      ))}
    </div>
  );
};
