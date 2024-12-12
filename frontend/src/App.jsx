
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './components/auth/Signup';
import LoginPage from './components/auth/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;