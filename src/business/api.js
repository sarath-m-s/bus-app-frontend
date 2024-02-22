// api.js

export const enrollNewUser = async (userData) => {
    try {
      const response = await fetch('your-enroll-user-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to enroll new user');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const searchExistingUser = async (searchData) => {
    try {
      const response = await fetch('your-search-user-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to search existing user');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  