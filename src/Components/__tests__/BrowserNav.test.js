import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BrowserNav from '../BrowserNav';

const mockProps = {
  selectedProfile: 'pic-1',
  showProfilePick: jest.fn(),
  profilesNavBar: [
    { profileName: 'Test Profile', profilePicture: 'pic-1' }
  ],
  setSelectedProfile: jest.fn(),
  showMyList: jest.fn(),
  hideMyList: jest.fn(),
  setSelectedProfileName: jest.fn()
};

describe('BrowserNav', () => {
  test('renders navigation links', () => {
    render(<BrowserNav {...mockProps} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('TV Show')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('My List')).toBeInTheDocument();
  });

  test('calls hideMyList when Home is clicked', () => {
    render(<BrowserNav {...mockProps} />);
    fireEvent.click(screen.getByText('Home'));
    expect(mockProps.hideMyList).toHaveBeenCalled();
  });

  test('calls showMyList when My List is clicked', () => {
    render(<BrowserNav {...mockProps} />);
    fireEvent.click(screen.getByText('My List'));
    expect(mockProps.showMyList).toHaveBeenCalled();
  });

  test('renders Netflix logo', () => {
    render(<BrowserNav {...mockProps} />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', './Assets/Netflix-brand.png');
  });
});