export type InitialStateType = {
  todoList: TodoListType[];
};

export type TodoListType = {
  id: string;
  filter: FilterType;
  taskTitle: string;
};

type FilterType = 'all' | 'active' | 'completed';
