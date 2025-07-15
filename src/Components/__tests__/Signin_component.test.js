import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signin_component from '../Signin_component';

describe('Signin_component', () => {
  test('renders signin form', () => {
    render(
      <BrowserRouter>
        <Signin_component />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome back!/)).toBeInTheDocument();
  });

  test('renders email input field', () => {
    render(
      <BrowserRouter>
        <Signin_component />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
  });

  test('handles email input change', () => {
    render(
      <BrowserRouter>
        <Signin_component />
      </BrowserRouter>
    );
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });

  test('renders get started button', () => {
    render(
      <BrowserRouter>
        <Signin_component />
      </BrowserRouter>
    );
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});