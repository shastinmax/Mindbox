import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './store/store';

test('renders component App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const myTodoList = screen.getByText(/My ToDo list/i);
  const btnAll = screen.getByText(/all/i);
  const btnActive = screen.getByText(/active/i);
  const btnCompleted = screen.getByText(/completed/i);
  const input = screen.getByPlaceholderText('add new todo...');
  const img = screen.getByAltText('addTodo');
  expect(input).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(myTodoList).toBeInTheDocument();
  expect(btnAll).toBeInTheDocument();
  expect(btnActive).toBeInTheDocument();
  expect(btnCompleted).toBeInTheDocument();
});
