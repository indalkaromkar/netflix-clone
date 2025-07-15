import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProfilePicker from '../ProfilePicker';

global.fetch = jest.fn();

const mockProps = {
  hideProfilePick: jest.fn(),
  setSelectedProfile: jest.fn(),
  email: 'test@example.com',
  setProfilesNavBar: jest.fn(),
  setSelectedProfileName: jest.fn()
};

describe('ProfilePicker', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      json: () => Promise.resolve([
        { profileName: 'Profile 1', profilePicture: 'pic-1' },
        { profileName: 'Profile 2', profilePicture: 'pic-2' }
      ])
    });
  });

  test('renders who is watching text', () => {
    render(<ProfilePicker {...mockProps} />);
    expect(screen.getByText(/Who's watching?/)).toBeInTheDocument();
  });

  test('fetches profiles on mount', async () => {
    render(<ProfilePicker {...mockProps} />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`http://localhost:8080/api/profiles/${mockProps.email}`);
    });
  });

  test('renders manage profiles button', () => {
    render(<ProfilePicker {...mockProps} />);
    expect(screen.getByText('Manage Profiles')).toBeInTheDocument();
  });
});