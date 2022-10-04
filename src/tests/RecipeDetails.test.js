import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import copy from 'clipboard-copy';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

// const mockHistoryPush = jest.fn();

jest.mock('clipboard-copy');

describe('', () => {
  beforeEach(() => {
    navigator.clipboard = {
      writeText: jest.fn(),
    };

    const { history } = renderWithRouter(<App />);

    history.push('/meals/52977');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('when click to favorite, the color of icon changes from white to black', async () => {
    const favoriteBtn = await screen.findByTestId('favorite-btn');
    expect(favoriteBtn).toHaveAttribute('src', 'whiteHeartIcon.svg');
    userEvent.click(favoriteBtn);
    expect(favoriteBtn).toHaveAttribute('src', 'blackHeartIcon.svg');
  });

  it('when click in share button, the link of recipe is copy to clipboard', async () => {
    const shareBtn = await screen.findByTestId('share-btn');
    expect(copy).not.toBeCalled();
    userEvent.click(shareBtn);
    const linkMsg = screen.getByRole('heading', { level: 4, name: /link/i });
    await waitFor(() => {
      expect(linkMsg).toBeInTheDocument();
    });
    expect(copy).toBeCalled();
    expect(copy).toBeCalledWith('http://localhost:3000/meals/52977');
  });
  it('checks the recommendation carousel inside meals and drinks pages', async () => {
    const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const carouselDiv = await screen.findByRole('heading', { level: 3, name: /recommendations/i });
    expect(carouselDiv).toBeInTheDocument();
    const { history } = renderWithRouter(<App />);
    jest.spyOn(global, 'fetch');

    history.push('/drinks/15997');
    expect(history.location.pathname).toBe('/drinks/15997');
    await waitFor(() => {
      expect(fetch).toBeCalledWith(mealsUrl);
    });
  });
  it('Verifys if we are redirected to inProgress page when clicks on start recipe btn', async () => {
  // await waitFor(async () => {
  // const startRecipeBtn = await screen.findByRole('button', { name: /Start Recipe/i });
  // });
  });
});
