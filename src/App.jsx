import './App.css'
import logo from './assets/bus.png';  
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
  let history = useHistory();

  const goToNextPage = () => {
    history.push('/next-page');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToNextPage}>Start</button>
    </div>
  );
}

function NextPage() {
  const [payload, setPayload] = useState('');
  const [busId, setBusId] = useState('');
  const [busData, setBusData] = useState(null);

  const getBusData = () => {
    fetch(`https://htnglwbkd1.execute-api.us-east-1.amazonaws.com/prod/bta/get/geo-location/${busId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setBusData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const sendDataToDynamoDB = () => {
    fetch('https://4y8ta28zd9.execute-api.us-east-1.amazonaws.com/prod/bta/save/geo-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <>
      <img src={logo} alt="Logo" className='logo' />
      <h1>Track Bus</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the payload.."
          value={payload}
          onChange={e => setPayload(e.target.value)}
        />
      </div>
      <div>
        <button onClick={sendDataToDynamoDB}>Send</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the bus ID.."
          value={busId}
          onChange={e => setBusId(e.target.value)}
        />
        <button onClick={getBusData}>Get Bus Data</button>
      </div>
      <div>
        {busData && <pre>{JSON.stringify(busData, null, 2)}</pre>}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/next-page" component={NextPage} />
    </Router>
  );
}

export default App