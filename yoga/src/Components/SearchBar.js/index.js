import React, { useState } from 'react';
import './searchbar.css'
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <div className='search-bar'>
      <input
      className='textbar'
        type='text'
        placeholder='Search by title or description'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='searchbtn' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
