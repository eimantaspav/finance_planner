import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const user = useContext(AuthContext);
  if (!user) {
    throw Error('context not inside a ContextProvider');
  }
  return user;
};
