'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setMessage(data.message || 'No message available'))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>{message}です</h1>
    </div>
  );
}
