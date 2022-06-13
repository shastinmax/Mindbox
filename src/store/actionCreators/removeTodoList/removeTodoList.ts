export const RemoveTodoList = (id: string) =>
  ({
    type: 'TODO/REMOVE-TODO-LIST',
    id,
  } as const);
