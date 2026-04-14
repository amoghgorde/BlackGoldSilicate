import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import WhyUs from './WhyUs';

// Helper to reset scroll position when switching pages
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Management Profile Page */}
        <Route path="/about" element={<About />} />
        
        {/* Technical Advantage Page - ADDED THIS */}
        <Route path="/why-us" element={<WhyUs />} />

        {/* Optional: Redirect any unknown paths back to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;