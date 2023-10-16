import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Searchbar.css'

// Component for searchbar
const Searchbar = () => {
    const [searchValue, setSearchValue] = useState('');

    // Skeleton implementation
    const handleSearch = () => {
    };

    return (
        <div className="searchbar">
          <input
            type="text"
            placeholder="Enter your search here..."
            className='search-textfield'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className='search-submit' type='submit' onClick={handleSearch}>
            <SearchIcon className='search-icon'/>
          </button>
        </div>
      );
}

export default Searchbar