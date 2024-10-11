import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Cart from './pages/Cart';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import MagicCursor from './components/MagicCursor';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen bg-background text-text">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery/:service" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
            <MagicCursor position={cursorPosition} />
          </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;