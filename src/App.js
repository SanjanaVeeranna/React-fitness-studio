import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from './views/Auth/Login';
import Section1 from './views/Home/BackgroundImage';
import Section2 from './views/Home/AboutFit';
import Section3 from './views/Home/ChallengeFit';
import Section4 from './views/Home/BenefitsFit';
import Section5 from './views/Home/GalleryFit';
import Section6 from './views/Home/ContactFit';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Section1 />} />
        <Route path="/about" element={<Section2 />} />
        <Route path="/challenges" element={<Section3 />} />
        <Route path="/benefits" element={<Section4 />} />
        <Route path="/gallery" element={<Section5 />} />
        <Route path="/contact" element={<Section6 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
