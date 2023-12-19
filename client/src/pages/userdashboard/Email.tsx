import React, { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Code to handle the email submission, e.g., sending it to a server
    console.log('Email submitted:', email);
    // Reset the email field after submission
    setEmail('');
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Email;