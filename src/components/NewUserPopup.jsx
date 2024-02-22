// NewUserPopup.jsx
import React, { useState } from 'react';

const NewUserPopup = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    enrollBus: '',
    enrollDriver: '',
    enrollRoute: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="enrollBus"
          placeholder="Enroll Bus"
          value={userData.enrollBus}
          onChange={handleChange}
        />
        <input
          type="text"
          name="enrollDriver"
          placeholder="Enroll Driver"
          value={userData.enrollDriver}
          onChange={handleChange}
        />
        <input
          type="text"
          name="enrollRoute"
          placeholder="Enroll Route"
          value={userData.enrollRoute}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewUserPopup;
