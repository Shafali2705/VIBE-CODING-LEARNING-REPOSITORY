import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans selection:bg-neutral-200">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder for future sections */}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
