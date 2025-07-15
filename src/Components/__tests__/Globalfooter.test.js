import React from 'react';
import { render, screen } from '@testing-library/react';
import Globalfooter from '../Globalfooter';

describe('Globalfooter', () => {
  test('renders copyright text', () => {
    render(<Globalfooter />);
    expect(screen.getByText(/© 2024 NetflixClone. All rights reserved./)).toBeInTheDocument();
    expect(screen.getByText(/By Ramkrishna Indalkar/)).toBeInTheDocument();
  });

  test('renders disclaimer text', () => {
    render(<Globalfooter />);
    expect(screen.getByText(/This is a demo project and is not affiliated with or endorsed by Netflix/)).toBeInTheDocument();
  });

  test('has correct CSS class', () => {
    const { container } = render(<Globalfooter />);
    expect(container.firstChild).toHaveClass('home-footer');
  });
});