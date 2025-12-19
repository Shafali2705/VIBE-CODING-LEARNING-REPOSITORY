import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { BrandLogo } from './Navbar'; // Reuse the exact same component

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-neutral-800 pb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               {/* Logo in Footer - Using Brand Brown Color as requested (#5D4037) */}
               {/* Added a small white glow/shadow just in case visibility is too low on black, 
                   but keeping main fill brown as per instruction */}
               <div className="text-[#5D4037]"> 
                 <BrandLogo className="h-20 w-auto" />
               </div>
            </div>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Your trusted partner for finding premium, safe rental homes in Pune's most desirable neighborhoods. We prioritize safety and comfort for women and families.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-medium text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h4 className="font-heading font-medium text-lg">Prime Locations</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Koregaon Park</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kalyani Nagar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading font-medium text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Phone size={18} className="text-neutral-500" />
                <span>+91 93260 71020</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Mail size={18} className="text-neutral-500" />
                <span>tripatnaz@gmail.com</span>
              </div>
              
              <a href="https://wa.me/919326071020" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 w-full btn-primary bg-white text-neutral-900 hover:bg-neutral-200 border-none text-xs h-10">
                  <MessageCircle size={14} /> Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Prem Om Properties. All rights reserved.</p>
          <p>Designed with ❤️ in Pune</p>
        </div>
      </div>
    </footer>
  );
}
