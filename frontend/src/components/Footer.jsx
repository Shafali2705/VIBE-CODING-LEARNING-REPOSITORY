import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-neutral-800 pb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 font-heading font-bold text-xl">P</div>
              <span className="font-heading font-semibold text-2xl tracking-tight">Prem Om</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Your trusted partner for finding premium, safe rental homes in Pune's most desirable neighborhoods. We prioritize safety and comfort for women and families.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-medium text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
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
              <li><a href="#" className="hover:text-white transition-colors">Viman Nagar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boat Club Road</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Magarpatta City</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading font-medium text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin size={18} className="mt-1 shrink-0 text-neutral-500" />
                <span>Office 404, Gera Imperium,<br/>Koregaon Park, Pune 411001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Phone size={18} className="text-neutral-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Mail size={18} className="text-neutral-500" />
                <span>hello@premom.com</span>
              </div>
              
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
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
