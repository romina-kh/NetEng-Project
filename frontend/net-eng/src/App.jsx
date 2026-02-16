import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage'; 
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/UserProfilePage';
import AdminProfile from './pages/AdminProfilePage';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/admin" element={<AdminProfile/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;