import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customer = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busList, setBusList] = useState([]);
  const [busStops, setBusStops] = useState([]);

  useEffect(() => {
    const fetchBusStops = async () => {
      try {
        const response = await axios.get('https://your-api-endpoint.com');
        setBusStops(response.data);
      } catch (error) {
        console.error('Error fetching bus stops from DynamoDB', error);
      }
    };

    fetchBusStops();
  }, []);

  const handleSubmit = () => {
    const filteredBuses = busStops.filter(busStop => busStop === from || busStop === to);
    setBusList(filteredBuses);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={e => setFrom(e.target.value)}
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={e => setTo(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {busList.map((bus, index) => (
          <li key={index}>{bus}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customer;
