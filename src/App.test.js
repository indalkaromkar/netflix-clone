import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

global.fetch = jest.fn();

describe('App', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      json: () => Promise.resolve([])
    });
  });

  test('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(document.querySelector('.App')).toBeInTheDocument();
  });

  test('renders Main component on root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Unlimited movies, TV shows, and more/)).toBeInTheDocument();
  });

  test('renders Browse component on /browse path', () => {
    render(
      <MemoryRouter initialEntries={['/browse']} initialIndex={0}>
        <App />
      </MemoryRouter>
    );
    expect(document.querySelector('.browse')).toBeInTheDocument();
  });
});
