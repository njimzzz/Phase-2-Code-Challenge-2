import React from 'react';

const BotFilter = ({ filterChange }) => {
  const handleChange = (event) => {
    filterChange(event.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="filterSelect" className="form-label">Filter By:</label>
      <select id="filterSelect" className="form-select" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Support">Support</option>
      </select>
    </div>
  );
};

export default BotFilter;