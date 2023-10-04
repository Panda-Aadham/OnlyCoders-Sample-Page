import { render, screen } from '@testing-library/react';
import Header from './Header.tsx';
import React from 'react';

test('test all items appear', () => {
    render(<Header />);
    expect(document.getElementsByClassName('logo')).not.toBeNull();
    expect(document.getElementsByClassName('nav-button')).toHaveLength(3);
    expect(screen.queryByText(/Features/)).toBeInTheDocument();
    expect(screen.queryByText(/More/)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Enter your search here.../)).toBeInTheDocument();
    expect(document.getElementsByClassName('nav-login')).not.toBeNull();
})
