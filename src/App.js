import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/home"
import About from "./Pages/about"
import Contact from "./Pages/contact"
import FAQ from "./Pages/FAQ"
import Testimonial from "./Pages/testimonials"
import Login from "./Pages/login"
import SignUp from "./Pages/signUp"
import Membership from './Pages/membership';
import AddDriver from './Pages/addDriver';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/adddriver" element={<AddDriver />} />
      </Routes>
    </Router>
  );
}

export default App