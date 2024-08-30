import axios from 'axios';
import { ENROL_BUS_API_ENDPOINT } from '../helper/constants.js';
import { ENROL_DRIVER_API_ENDPOINT } from '../helper/constants.js';
import {ENROL_ROUTE_API_ENDPOINT } from '../helper/constants.js'

// Function to save bus data
export async function saveBusData(data) {
  console.log('save bus data', data);
  const response = await axios.post(ENROL_BUS_API_ENDPOINT, data);
  return response.data;
}

// Function to save driver data
export async function saveDriverData(data) {
  console.log('save driver data', data);
  const response = await axios.post(ENROL_DRIVER_API_ENDPOINT, data);
  return response.data;
}

// Function to save route data
export async function saveRouteData(data) {
  console.log('save route data', data);
  const response = await axios.post(ENROL_ROUTE_API_ENDPOINT, data);
  return;
}