import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddProfile from '../AddProfile';

global.fetch = jest.fn();

const mockProps = {
  email: 'test@example.com',
  hideAddProfile: jest.fn(),
  fetchProfiles: jest.fn()
};

describe('AddProfile', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      json: () => Promise.resolve({ success: true })
    });
  });

  test('renders add profile form', () => {
    render(<AddProfile {...mockProps} />);
    expect(screen.getByText('Add Profile')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });

  test('handles profile name input', () => {
    render(<AddProfile {...mockProps} />);
    const nameInput = screen.getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'New Profile' } });
    expect(nameInput.value).toBe('New Profile');
  });

  test('submits profile creation', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(true)
    });
    
    render(<AddProfile {...mockProps} />);
    const nameInput = screen.getByPlaceholderText('Name');
    
    fireEvent.change(nameInput, { target: { value: 'New Profile' } });
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/profile/validate/test@example.com/New Profile');
    });
    
    const submitButton = screen.getByText('Continue');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/profiles/add', expect.any(Object));
    });
  });
});