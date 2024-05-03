import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import SignIn from "./pages/signIn"
import Profile from './pages/userProfile';
import Footer from "./components/Footer/footer";
import Error from './pages/error';
import './assets/sass/style.css';

function AppRouter() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default AppRouter