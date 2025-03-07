import { Routes, Route } from 'react-router'
import { useEffect } from 'react'
import HeaderNavigation from './Components/HeaderNavigation'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css'

export default function App() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'dataLayer-initialized',
      'user_info': {
          'language': navigator.language,
          'user_agent': navigator.userAgent,
          'mobile_user': navigator.userAgentData.mobile || 'not available',
          'platform': navigator.userAgentData.platform || 'not available',
          'browser': navigator.userAgentData.brands[1].brand || 'not available',
          'brand': navigator.userAgentData.brands[2].brand || 'not available'
      }
    });
  });
  
  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/Ableton-Aboutpage-Clone" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};
