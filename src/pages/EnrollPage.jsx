import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveDataToDynamoDB } from '../business/api'; 

function EnrollPage() {
  const [enrollments, setEnrollments] = useState({ bus: '', driver: '', route: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnrollments({ ...enrollments, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveDataToDynamoDB(enrollments);
      navigate('/select');
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  return (
    <div>
      <h2>Enroll Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enroll Bus:
            <input type="text" name="bus" value={enrollments.bus} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Enroll Driver:
            <input type="text" name="driver" value={enrollments.driver} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Enroll Route:
            <input type="text" name="route" value={enrollments.route} onChange={handleInputChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EnrollPage;
