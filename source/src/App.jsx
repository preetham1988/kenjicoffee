import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import About from './components/About';
import Pitch from './components/Pitch';
import Products from './components/Products';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Profile />
        <Heritage />
        <Pitch />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
