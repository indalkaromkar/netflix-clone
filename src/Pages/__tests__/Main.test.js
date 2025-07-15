import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main';

describe('Main', () => {
  test('renders main page content', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByText(/Unlimited movies, TV shows, and more/)).toBeInTheDocument();
  });

  test('renders get started button', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getAllByText('Get Started')[0]).toBeInTheDocument();
  });

  test('renders email input', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getAllByPlaceholderText('Email Address')[0]).toBeInTheDocument();
  });

  test('renders Netflix logo', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const logos = screen.getAllByRole('img');
    const netflixLogo = logos.find(img => img.getAttribute('src') === '/Assets/Netflix-brand.png');
    expect(netflixLogo).toBeInTheDocument();
  });
});