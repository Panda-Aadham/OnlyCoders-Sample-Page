import React from 'react';
import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar.tsx'

test('test searchbar is editable', () => {
    render(<Searchbar />);
    const searchInput = screen.queryByRole('textbox');
    expect(searchInput).toBeEnabled(); 
});

test('test search button exists', () => {
    render(<Searchbar />);
    const searchIcon = document.getElementsByClassName('search-submit');
    expect(searchIcon).not.toBeNull();
})