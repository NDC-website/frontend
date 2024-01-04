import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/home"
import FAQ from "./Pages/FAQ"
import Login from "./Pages/login"
import SignUp from "./Pages/signUp"
import Membership from './Pages/membership';
import AddDriver from './Pages/addDriver';
import PlaneAndPrice from './Pages/planAndPricing';
import QuickService from './Pages/quicksServices';
import Account from "./Pages/account"
import { MantineProvider } from '@mantine/core';


function App() {
  return (
    <MantineProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quickservices" element={<QuickService />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/adddriver" element={<AddDriver />} />
        <Route path="/planandprice" element={<PlaneAndPrice />} />
        
        <Route path="/account" element={<Account />} /> */}
      </Routes>
    </Router>
    </MantineProvider>
  );
}

export default App