import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VideoCard from '../VideoCard';

const mockProps = {
  videoTitle: 'Test Movie',
  videoCategory: 'Action',
  videoRating: '8.5',
  releaseYear: '2023',
  thumbnail: 'test-thumbnail',
  email: 'test@example.com',
  selectedProfileName: 'Test Profile'
};

describe('VideoCard', () => {
  test('renders video card with correct props', () => {
    render(<VideoCard {...mockProps} />);
    const videoCard = document.querySelector('.vCard-Container');
    expect(videoCard).toBeInTheDocument();
    expect(videoCard).toHaveClass('test-thumbnail');
  });

  test('has correct thumbnail class', () => {
    const { container } = render(<VideoCard {...mockProps} />);
    expect(container.querySelector('.test-thumbnail')).toBeInTheDocument();
  });

  test('shows video info on hover', async () => {
    render(<VideoCard {...mockProps} />);
    const videoCard = document.querySelector('.vCard-Container');
    fireEvent.mouseEnter(videoCard);
    
    await waitFor(() => {
      expect(screen.getByText('Test Movie')).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});