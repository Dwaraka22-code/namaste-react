import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import MOCK_DATA_MENU from '../mocks/mockResMenu.json';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom';
import Cart from '../Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_MENU);
    },
  });
});

it('Should load Restaurant Menu Component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText('All-in-1 Thali Meals(19)');
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId('foodItems').length).toBe(19);

  const addBtns = screen.getAllByRole('button', { name: 'Add+' });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText('Cart-(1items)')).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText('Cart-(2items)')).toBeInTheDocument();

  //Cart Page - 2 items render
  expect(screen.getAllByTestId('foodItems').length).toBe(21);

  const clearCart = screen.getByRole('button', { name: 'Clear Cart' });
  fireEvent.click(clearCart);
  expect(
    screen.getByText('Cart is empty. Add Items to the Cart!')
  ).toBeInTheDocument();
});
