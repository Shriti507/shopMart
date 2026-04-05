import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroBanner from '../HeroBanner';

describe('HeroBanner Component', () => {
  it('renders the primary call to action heading', () => {
    render(<HeroBanner />);
    
    // Check main catchphrase
    const heading = screen.getByText(/We bring the/i);
    expect(heading).toBeTruthy();
    
    // Check CTA button
    const cta = screen.getByText(/Shop Now/i);
    expect(cta).toBeTruthy();
  });
});
