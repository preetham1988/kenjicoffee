import React from 'react';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Heritage />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
