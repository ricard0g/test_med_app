// Import necessary modules from React library
import React, { useEffect, useState } from 'react';

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
// import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation';

// Import Review Form
import ReviewForm from './components/ReviewForm/ReviewForm.js';

// Import Booking Consultation
import BookingConsultation from './components/BookingConsultation.js';

// Import Profile Card
import ProfileCard from './components/ProfileCard/ProfileCard.js';

// Function component for the main App
function App() {
    const [isLogged, setIsLogged] = useState(false);
    console.log(isLogged);

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar setIsLogged={setIsLogged}/>

          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path='/' element={<Landing_Page />} />
            <Route path='/reviews' element={<ReviewForm />} />
            <Route path='/appointments' element={<BookingConsultation isLogged={isLogged} />} />
            <Route path="/booking-consultation" element={<BookingConsultation isLogged={isLogged} />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path='/signup' element={<Sign_Up setIsLogged={setIsLogged} />} />
            <Route path='/login' element={<Login setIsLogged={setIsLogged} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;