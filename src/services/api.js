const BASE_URL = 'YOUR_API_BASE_URL';

const sendFormData = async (data) => {
  try {
    // Send data to DynamoDB via API
    const response = await fetch(`${BASE_URL}/endpoint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Error sending data to server');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};

export { sendFormData };
