import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Browse from '../Browse';

global.fetch = jest.fn();

const mockLocationState = {
  state: { email: 'test@example.com' }
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockLocationState
}));

describe('Browse', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      json: () => Promise.resolve([])
    });
  });

  test('renders ProfilePicker initially', () => {
    render(
      <BrowserRouter>
        <Browse />
      </BrowserRouter>
    );
    expect(screen.getByText(/Who's watching?/)).toBeInTheDocument();
  });

  test('fetches video data on mount', async () => {
    render(
      <BrowserRouter>
        <Browse />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/videoSuggestions/Now Playing');
    });
  });
});