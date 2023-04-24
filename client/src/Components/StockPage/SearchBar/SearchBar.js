import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">
        Найти
      </button>
    </form>
  );
}

export default SearchBar;