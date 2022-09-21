import { useState } from 'react';

// style
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  // functions
  const submitHandler = e => {
    e.preventDefault();
    console.log(email, password, displayName);
  };
  // JSX
  return (
    <form onSubmit={submitHandler} className={styles['signup-form']}>
      <h2>Create New Account</h2>
      {/* Email user input */}
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>
      {/* Password user input */}
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={e => {
            setDisplayName(e.target.value);
          }}
          value={displayName}
        />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
}
