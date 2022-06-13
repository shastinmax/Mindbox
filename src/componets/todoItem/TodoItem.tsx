import { Button } from '../common/button/Button';
import { Todo } from '../Todo/Todo';

import style from './TodoItem.module.scss';
import { TodoItemType } from './types';

export const TodoItem = (props: TodoItemType) => {
  const { todoLists, changeFilter } = props;

  const onAllClickHandler = () => changeFilter('all');
  const onActiveClickHandler = () => changeFilter('active');
  const onCompletedClickHandler = () => changeFilter('completed');

  return (
    <div>
      <div className={style.button_wrapper}>
        <Button title="All" className="btn btn_green" callback={onAllClickHandler} />
        <Button title="Active" className="btn" callback={onActiveClickHandler} />
        <Button
          title="Completed"
          className="btn btn_red"
          callback={onCompletedClickHandler}
        />
      </div>
      <Todo todoLists={todoLists} />
    </div>
  );
};
