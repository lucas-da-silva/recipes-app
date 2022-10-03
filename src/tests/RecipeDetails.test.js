import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
// import copy from 'clipboard-copy';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

const mockHistoryPush = jest.fn();

const copy = require('clipboard-copy');

jest.mock('clipboard-copy').mockImplementation(() => jest.fn(() => console.log('test-mock')));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('', () => {
  beforeEach(() => {
    navigator.clipboard = {
      writeText: jest.fn(),
    };

    const { history } = renderWithRouter(<App />);

    // localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/meals/52977');
  });
  it('when click to favorite, the icon change to black heart', async () => {
    const favBNT = await screen.findByTestId('favorite-btn');
    userEvent.click(favBNT);
    expect(favBNT).toHaveAttribute('src', 'blackHeartIcon.svg');
  });
  it('when click to favorite, the icon change to white heart', async () => {
    const favBNT = await screen.findByTestId('favorite-btn');
    userEvent.click(favBNT);
    expect(favBNT).toHaveAttribute('src', 'whiteHeartIcon.svg');
  });

  it('when click in shared button, the details recipe is copy to clipboard', async () => {
    userEvent.click(await screen.findByTestId('share-btn'));

    expect(screen.getByText(/link copied!/i)).toBeInTheDocument();
    expect(copy).toBeCalled();
    /* expect(copy).toBeCalledWith('http://localhost:3000/meals/52977');
    await waitFor(() => expect(screen.queryByText(/link copied!/i)).not.toBeInTheDocument(), { timeout: 4000 });

    userEvent.click(await screen.findByTestId('share-btn'));
    expect(copy).toBeCalledWith('http://localhost:3000/meals/52977');
    expect(copy).toBeCalledTimes(2); */
  });
});
