import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

it('Should render Header Component with a Login Button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByRole('button', { name: 'Login' });

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it('Should render Header Component with Cart items 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cartItems = screen.getByText('Cart-(0items)');

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it('Should render Header Component with Cart item', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cartItems = screen.getByText(/Cart/);

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it('Should Change Login Button to Logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'Logout' });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
