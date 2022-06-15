import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Todo } from './Todo';

import { store } from 'store/store';

test('renders component Todo', () => {
  render(
    <Provider store={store}>
      <Todo id="10" taskTitle="hello world" checked={false} />
    </Provider>,
  );
  const helloWorld = screen.getByText(/hello worl.../i);
  const input = screen.getByRole('checkbox');
  const img = screen.getByAltText('delete');
  expect(helloWorld).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
