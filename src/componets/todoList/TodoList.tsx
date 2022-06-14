import { TodoItem } from '../todoItem/TodoItem';

import { TodoItemType } from './types';

export const TodoList = (props: TodoItemType) => {
  const { todoLists } = props;

  return (
    <div>
      <TodoItem todoLists={todoLists} />
    </div>
  );
};
