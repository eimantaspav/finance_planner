import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// style
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, isPending, error } = useSignup();

  // functions
  const submitHandler = e => {
    e.preventDefault();
    signup(email, password, displayName);
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
      {/* signup / pending btn */}
      {isPending ? (
        <button className="btn" disabled>
          Loading
        </button>
      ) : (
        <button className="btn">Sign Up</button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
