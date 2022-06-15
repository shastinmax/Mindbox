export const AddNewTodoList = (data: {
  filter: string;
  checked: boolean;
  id: string;
  taskTitle: string;
}) =>
  ({
    type: 'TODO/ADD-NEW-TODO-LIST',
    data,
  } as const);
