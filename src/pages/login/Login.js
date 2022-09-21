import { useState } from 'react';
// style
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    console.log(email, password);
  };
  // JSX
  return (
    <form onSubmit={submitHandler} className={styles['login-form']}>
      <h2>Login</h2>
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
      <button className="btn">Sign in</button>
    </form>
  );
}
