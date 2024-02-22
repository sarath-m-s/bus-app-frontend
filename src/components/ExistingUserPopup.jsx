// ExistingUserPopup.jsx
import React, { useState } from 'react';

const ExistingUserPopup = ({ onSubmit }) => {
  const [searchData, setSearchData] = useState({
    searchBus: '',
    searchDriver: '',
    searchRoute: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchData);
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchBus"
          placeholder="Search Bus"
          value={searchData.searchBus}
          onChange={handleChange}
        />
        <input
          type="text"
          name="searchDriver"
          placeholder="Search Driver"
          value={searchData.searchDriver}
          onChange={handleChange}
        />
        <input
          type="text"
          name="searchRoute"
          placeholder="Search Route"
          value={searchData.searchRoute}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExistingUserPopup;
