import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login';

global.fetch = jest.fn();

describe('Login', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders login form', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email or mobile number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('handles email input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText('Email or mobile number');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  test('handles password input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });

  test('submits login form', async () => {
    fetch.mockResolvedValue({
      json: () => Promise.resolve(true)
    });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('Email or mobile number');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign In' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/authenticator/test@example.com/password123');
    });
  });
});