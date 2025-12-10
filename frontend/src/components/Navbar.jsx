import React from 'react';
import { Phone, MessageCircle, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-24 transition-all duration-300" 
         style={{ background: 'var(--bg-overlay)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        
        {/* Logo Image */}
        <div className="flex items-center gap-2">
          <img 
            src="https://customer-assets.emergentagent.com/job_prem-om-rentals/artifacts/4wh76rg9_Brand%20Image%20Prem%20Om.png" 
            alt="Prem Om Properties" 
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm font-medium text-neutral-500 mr-2">
            Serving Koregaon Park & Surroundings
          </span>
          <a href="tel:+919326071020" className="no-underline">
            <button className="btn-secondary h-10 px-6 text-sm flex items-center gap-2">
              <Phone size={16} /> Call Now
            </button>
          </a>
          <a href="https://wa.me/919326071020" target="_blank" rel="noopener noreferrer" className="no-underline">
            <button className="btn-primary h-10 px-6 text-sm flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#FFF9F2]">
              <div className="flex flex-col gap-6 mt-10">
                <a href="https://wa.me/919326071020" className="w-full">
                  <button className="btn-primary w-full justify-center">
                    <MessageCircle size={18} /> WhatsApp Us
                  </button>
                </a>
                <a href="tel:+919326071020" className="w-full">
                  <button className="btn-secondary w-full justify-center">
                    <Phone size={18} /> Call Now
                  </button>
                </a>
                <div className="mt-8 p-4 bg-white rounded-xl border border-neutral-100">
                  <h4 className="font-heading font-medium mb-2">Service Areas</h4>
                  <p className="text-neutral-500 text-sm">Specializing in Koregaon Park, Kalyani Nagar, and Boat Club Road.</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
