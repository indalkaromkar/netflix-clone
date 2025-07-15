import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  test('has correct thumbnail class', () => {
    const { container } = render(<VideoCard {...mockProps} />);
    expect(container.querySelector('.test-thumbnail')).toBeInTheDocument();
  });

  test('shows video info on hover', () => {
    render(<VideoCard {...mockProps} />);
    const videoCard = screen.getByText('Test Movie').closest('.video-card');
    fireEvent.mouseEnter(videoCard);
    expect(screen.getByText('Action')).toBeVisible();
  });
});