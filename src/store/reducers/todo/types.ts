export type InitialStateType = {
  todoLists: TodoListType[];
};
export type FilterType = 'all' | 'active' | 'completed';

export type TodoListType = {
  id: string;
  filter: FilterType;
  taskTitle: string;
};
