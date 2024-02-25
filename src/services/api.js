import axios from 'axios';

// Define your API base URL
const API_BASE_URL = 'http://localhost:3000';

// Function to save vehicle data
export async function saveVehicleData(data) {
  const response = await axios.post(`${API_BASE_URL}/api/vehicle`, data);
  return response.data;
}

// Function to save driver data
export async function saveDriverData(data) {
  const response = await axios.post(`${API_BASE_URL}/api/driver`, data);
  return response.data;
}

// Function to save route data
export async function saveRouteData(data) {
  const response = await axios.post(`${API_BASE_URL}/api/route`, data);
  return response.data;
}