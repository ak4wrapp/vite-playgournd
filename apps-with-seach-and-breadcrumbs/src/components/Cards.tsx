// src/App.tsx
import React, { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Card from './Card';
import SearchBar from './SearchBar';
import './cards.css';
import { AppData } from '../types';
import { jsonData } from '../utils/data';

const Cards: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');

  // Search functionality for the entire dataset
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const searchResults = searchJsonData(query, jsonData);
      setFilteredData(searchResults);
    } else {
      setFilteredData(jsonData);
    }
  };

  // Recursive search through the JSON data
  const searchJsonData = (query: string, data: AppData[]): AppData[] => {
    return data.flatMap(item => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        return [item];  // Return this item if it matches the search query
      }

      if (item.children) {
        // If there are children, search them recursively
        const childrenMatches = searchJsonData(query, item.children);
        if (childrenMatches.length > 0) {
          // If any child matches, return the parent along with matching children
          return [{ ...item, children: childrenMatches }];
        }
      }
      return [];  // Return an empty array if no matches
    });
  };

  // Handle breadcrumb click to navigate to the appropriate level
  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1);
    setCurrentPath(newPath);

    const parent = getParent(jsonData, newPath);
    if (parent && parent.children) {
      setFilteredData(parent.children);
    }
  };

  // Helper function to get the parent of a given path
  const getParent = (data: AppData[], path: string[]): AppData | null => {
    let currentLevel = data;
    for (let i = 0; i < path.length; i++) {
      const item = currentLevel.find((el: AppData) => el.title === path[i]);
      if (item && item.children) {
        currentLevel = item.children;
      } else {
        return null;
      }
    }
    return null;
  };

  // Handle card click to show children if available
  const handleCardClick = (item: AppData, path: string[]) => {
    if (item.children && item.children.length > 0) {
      setCurrentPath(path);
      setFilteredData(item.children);
    } else {
      alert(`You clicked the "${item.title}" card, which has no children.`);
    }
  };

  // Handle search query reset
  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredData(jsonData);
    setCurrentPath([]);
  };


  return (
    <div>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} query={searchQuery} clearSearch={handleClearSearch} />
      </div>
      <Breadcrumbs path={['Home', ...currentPath]} onBreadcrumbClick={handleBreadcrumbClick} />
      <div className="cards-container">
        {filteredData.map((item: AppData) => (
          <Card
            key={item.id}
            title={item.title}
            onClick={() => handleCardClick(item, [...currentPath, item.title])}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
