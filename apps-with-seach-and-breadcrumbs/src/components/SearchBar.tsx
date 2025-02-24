// src/components/SearchBar.tsx
import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  query: string;  // To receive the current search query
  clearSearch: () => void;  // To handle clearing the search
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, query, clearSearch }) => {
  const [inputValue, setInputValue] = useState(query);

  // Sync the input value with the query prop (in case the query changes externally)
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);  // Pass the search value to the parent
  };

  const handleClearSearch = () => {
    setInputValue('');  // Clear the input
    clearSearch();  // Trigger the parent's clearSearch function
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {inputValue && (
        <button onClick={handleClearSearch} className="clear-search-button">
          Clear Search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
