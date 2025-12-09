import React from 'react';
import { ArrowRight, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,249,242,0.8)] to-[#FFF9F2] z-10"></div>
        <img 
          src="https://images.pexels.com/photos/7045770/pexels-photo-7045770.jpeg" 
          alt="Premium Living Room" 
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
            Find Your <span className="text-neutral-500 italic font-serif">Safe Haven</span> <br/>in Koregaon Park
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto leading-relaxed"
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
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-orange-100">
                WhatsApp Us <ArrowRight size={20} />
              </button>
            </a>
            <a href="tel:+910000000000">
              <button className="btn-secondary h-14 px-8 text-lg w-full sm:w-auto bg-white/60">
                Call Directly
              </button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-neutral-500"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck size={20} className="text-neutral-800" />
              </div>
              <span className="text-sm font-medium">Safe Localities</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Heart size={20} className="text-neutral-800" />
              </div>
              <span className="text-sm font-medium">Family Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <MapPin size={20} className="text-neutral-800" />
              </div>
              <span className="text-sm font-medium">Prime Areas</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
