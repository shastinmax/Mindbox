export const ChangeChecked = (id: string, value: boolean) =>
  ({ type: 'TODO/CHANGE-CHECKED', id, value } as const);
