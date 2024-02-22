import React, { useState } from "react";
import NewUserPopup from "../components/NewUserPopup";
import ExistingUserPopup from "../components/ExistingUserPopup";
import { enrollNewUser, searchExistingUser } from "../business/api.js";

const Admin = () => {
  const [showNewUserPopup, setShowNewUserPopup] = useState(false);
  const [showExistingUserPopup, setShowExistingUserPopup] = useState(false);

  const handleNewUserClick = () => {
    setShowNewUserPopup(true);
  };

  const handleExistingUserClick = () => {
    setShowExistingUserPopup(true);
  };

  const handleNewUserSubmit = (userData) => {
    enrollNewUser(userData)
      .then((response) => {
        console.log("New user enrolled:", response);
        setShowNewUserPopup(false);
      })
      .catch((error) => {
        console.error("Error enrolling new user:", error);
      });
  };

  const handleExistingUserSubmit = (searchData) => {
    searchExistingUser(searchData)
      .then((response) => {
        console.log("Existing user found:", response);
        setShowExistingUserPopup(false);
      })
      .catch((error) => {
        console.error("Error searching existing user:", error);
      });
  };

  return (
    <div>
      <button onClick={handleNewUserClick}>New user</button>
      <button onClick={handleExistingUserClick}>Existing user</button>
      {showNewUserPopup && <NewUserPopup onSubmit={handleNewUserSubmit} />}
      {showExistingUserPopup && (
        <ExistingUserPopup onSubmit={handleExistingUserSubmit} />
      )}
    </div>
  );
};

export default Admin;
