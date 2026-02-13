import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage'; 
import LoginPage from './pages/LoginPage';
import AdminProfile from './pages/AdminProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<AdminProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
