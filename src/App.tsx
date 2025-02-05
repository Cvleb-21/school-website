import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './pages/About';
import Gallery from './pages/Gallery';
import GalleryAdmin from './pages/GalleryAdmin';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/admin" element={<GalleryAdmin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;