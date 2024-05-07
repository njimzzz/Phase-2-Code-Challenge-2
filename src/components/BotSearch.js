import React, { useState } from 'react';

const BotSearch = ({ handleChange, handleClear }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    handleChange(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    handleClear(query);
    setQuery('');
  };

  return (
    <form className="mb-3">
      <div className="input-group">
        <input
          className="form-control"
          name="query"
          placeholder="Search"
          value={query}
          type="text"
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-secondary" onClick={handleSearch} type="button">
          Clear
        </button>
      </div>
    </form>
  );
};

export default BotSearch;