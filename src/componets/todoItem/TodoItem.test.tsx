import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { App } from '../../App';
import { store } from '../../store/store';

test('renders component App', () => {
  render(
    <Provider store={store}>
      <App />,
    </Provider>,
  );
  const helloWorld = screen.getByText(/hello/i);
  const input = screen.getByRole('checkbox');
  const img = screen.getByAltText('delete');
  expect(helloWorld).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
