import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
// style
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();
  //
  const submitHandler = e => {
    e.preventDefault();
    login(email, password);
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
      {isPending ? (
        <button className="btn" disabled>
          Loading
        </button>
      ) : (
        <button className="btn">Sign In</button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
