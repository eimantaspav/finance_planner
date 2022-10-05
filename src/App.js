import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// pages
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
