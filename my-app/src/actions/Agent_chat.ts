"use server"

export async function sendMessageToAgent(message: string): Promise<string> {
  const API_URL = 'https://emailify-fastapi.onrender.com/api/chat';
  
  try {
    // Better to send in body for POST requests (more standard for text data)
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      // Try to get error details from response
      let errorDetails = '';
      try {
        const errorData = await response.json();
        errorDetails = errorData.detail || JSON.stringify(errorData);
      } catch {
        errorDetails = await response.text();
      }
      throw new Error(`Request failed with status ${response.status}: ${errorDetails}`);
    }

    const data = await response.json();
    return data.response || data; // Handle cases where response might be direct string
  } catch (error) {
    console.error('API call failed:', error);
    // Return user-friendly message while keeping original error in logs
    return "Sorry, we're having trouble connecting to the assistant. Please try again later.";
  }
}