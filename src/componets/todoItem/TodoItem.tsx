import { TodoItemType } from './types';

export const TodoItem = (props: TodoItemType) => {
  const { todoLists } = props;

  return (
    <div>
      {todoLists.map(({ id, taskTitle, filter }) => (
        <h1 key={id}>
          {taskTitle} {filter}
        </h1>
      ))}
    </div>
  );
};
