import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MyList from '../MyList';

global.fetch = jest.fn();

const mockProps = {
  email: 'test@example.com',
  selectedProfileName: 'Test Profile'
};

describe('MyList', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      json: () => Promise.resolve([
        {
          videoTitle: 'Test Movie',
          videoCategory: 'Action',
          releaseYear: '2023',
          thumbnail: 'test-thumb'
        }
      ])
    });
  });

  test('renders my list component', () => {
    render(<MyList {...mockProps} />);
    expect(screen.getByText('My List')).toBeInTheDocument();
  });

  test('fetches user video list on mount', async () => {
    render(<MyList {...mockProps} />);
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `http://localhost:8080/api/list/${mockProps.email}/${mockProps.selectedProfileName}`
      );
    });
  });

  test('displays video items when loaded', async () => {
    render(<MyList {...mockProps} />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Movie')).toBeInTheDocument();
    });
  });
});