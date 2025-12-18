import React from 'react';
import { ArrowRight, Key, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,249,242,0.85)] to-[#FFF9F2] z-10"></div>
        {/* Family Image */}
        <img 
          src="https://images.unsplash.com/photo-1585945148306-db646373834d?q=80&w=2070&auto=format&fit=crop" 
          alt="Happy Indian Family in Living Room" 
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <div className="container relative z-20 px-4 py-12 md:py-20 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-neutral-200"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase text-neutral-600">Premium Rentals in Pune</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero"
          >
            Find Your <span className="text-[#8D6E63] italic font-serif">Safe Haven</span> <br/>in Koregaon Park
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#5D4037] max-w-xl mx-auto leading-relaxed"
          >
            Curated premium homes for working women and families. 
            Safety, comfort, and community — personally verified.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('rentals')}
              className="btn-primary h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-orange-100 inline-flex items-center justify-center gap-2"
            >
              Explore Rentals
              <Key size={20} />
            </button>

            <button
              onClick={() => scrollToSection('contact-section')}
              className="btn-secondary h-14 px-8 text-lg w-full sm:w-auto bg-white/60 inline-flex items-center justify-center gap-2"
            >
              Buy Homes
              <Home size={20} />
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
