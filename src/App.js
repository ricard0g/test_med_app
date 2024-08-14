// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './components/Navbar/Navbar.js';

// Import Landing Page
import Landing_Page from './components/Landing_Page/Landing_Page.js';

// Import Sign Up
import Sign_Up from './components/Sign_Up/Sign_Up.js';

// Import Login
import Login from './components/Login/Login.js';

// Import Instant Consultation
import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation.js';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path='/' element={<Landing_Page />} />
            <Route path='/signup' element={<Sign_Up />} />
            <Route path='/login' element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;