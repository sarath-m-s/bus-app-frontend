import React, { useState, useEffect } from 'react';
import { getEnrolledDataFromDynamoDB } from '../business/api'; 

function SelectPage() {
  const [enrolledData, setEnrolledData] = useState({ buses: [], drivers: [], routes: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getEnrolledDataFromDynamoDB();
      setEnrolledData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <h2>Select Page</h2>
      <div>
        <label>Select Bus:</label>
        <select>
          <option disabled selected>Select Bus</option>
          {enrolledData.buses.map((bus, index) => (
            <option key={index}>{bus}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Driver:</label>
        <select>
          <option disabled selected>Select Driver</option>
          {enrolledData.drivers.map((driver, index) => (
            <option key={index}>{driver}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Route:</label>
        <select>
          <option disabled selected>Select Route</option>
          {enrolledData.routes.map((route, index) => (
            <option key={index}>{route}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectPage;
