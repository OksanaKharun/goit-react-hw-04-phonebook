import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className="filter">
      Filter contacts by name
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
};

export default Filter;