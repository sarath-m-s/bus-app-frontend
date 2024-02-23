export const saveDataToDynamoDB = async (data) => {
  try {
    const response = await fetch('your-dynamodb-api-url', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Error saving data to DynamoDB: ' + error.message);
  }
};


export const getEnrolledDataFromDynamoDB = async () => {
  try {
    const response = await fetch('your-dynamodb-api-url');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching enrolled data from DynamoDB: ' + error.message);
  }
};
