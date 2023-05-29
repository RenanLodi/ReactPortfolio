import React, { useState } from 'react';
import {validateEmail } from '../../utils/helpers';
import '../../styles/contact.css';


export default function Contact() {
  return (
    <h1>Contact Page</h1>
  ),
    Form();
};

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
     }  else {
      setMessage(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    alert(`Hello ${userName}`);
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div class="wrapper">
      <p>Hello {userName}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input class="msg"
          value={message}
          name='message'
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
