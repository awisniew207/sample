'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const connectToLit = async () => {
    try {
      const response = await fetch('/api/connect-lit', { // Updated URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Failed to connect to Lit:', error);
      if (error instanceof Error)
      setMessage('Failed to connect to Lit: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Lit Protocol Connection</h1>
      <button onClick={connectToLit}>Connect to Lit</button>
      <p>{message}</p>
    </div>
  );
}
