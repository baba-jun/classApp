'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080'

  useEffect(() => {
    fetch(backend_url)
      .then(response => response.json())
      .then(data => setMessage(data.message || 'No message available'))
      .catch(error => console.error('Error:', error));
  }, [backend_url]);

  return (
    <div>
      <h1>{message}です</h1>
    </div>
  );
}
