import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white font-heading font-bold">P</div>
              <span className="font-heading font-semibold text-lg">Prem Om Properties</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Your trusted partner for finding premium, safe rental homes in Pune's most desirable neighborhoods.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-medium">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+910000000000" className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                <Phone size={16} /> +91 000 000 0000
              </a>
              <a href="mailto:contact@premom.com" className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                <Mail size={16} /> contact@premom.com
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-600">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Koregaon Park, Pune,<br/>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Areas */}
          <div className="space-y-4">
            <h4 className="font-heading font-medium">Key Areas</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Koregaon Park</li>
              <li>Kalyani Nagar</li>
              <li>Boat Club Road</li>
              <li>Viman Nagar</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-heading font-medium">Looking for a home?</h4>
            <p className="text-xs text-neutral-500">
              Get in touch via WhatsApp for the fastest response.
            </p>
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary w-full text-sm py-2">
                <MessageCircle size={16} /> Chat on WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Prem Om Properties. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
