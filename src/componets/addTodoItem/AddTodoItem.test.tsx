import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../store/store';

import { AddTodoItem } from './AddTodoItem';

test('renders component AddTodoItem', () => {
  render(
    <Provider store={store}>
      <AddTodoItem />,
    </Provider>,
  );
  const input = screen.getByPlaceholderText('add new todo...');
  const img = screen.getByAltText('addTodo');
  expect(input).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
