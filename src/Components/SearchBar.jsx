import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <div>
      <input type='text' placeholder="Search for a recipe"></input>
      <button><Link to='/results'>Go</Link></button>
    </div>
  );
}

export default SearchBar;
