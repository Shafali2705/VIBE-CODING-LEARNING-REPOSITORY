import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rentals from './components/Rentals';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans selection:bg-neutral-200">
      <Navbar />
      <main>
        <Hero />
        <Rentals />
        <Testimonials />
        <Features />
        <About />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
