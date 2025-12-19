import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

// Custom SVG Logo to replicate the brand image (Inverse)
const BrandLogoInverse = ({ className = "h-16" }) => (
  <svg viewBox="0 0 300 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon Group */}
    <g transform="translate(110, 0) scale(0.6)">
       {/* House Shape */}
       <path 
         d="M10 50 L50 15 L90 50 V90 H10 V50 Z" 
         stroke="currentColor" 
         strokeWidth="8" 
         strokeLinecap="round" 
         strokeLinejoin="round"
       />
       {/* Chimney */}
       <path 
         d="M70 30 V20 H80 V40" 
         stroke="currentColor" 
         strokeWidth="8" 
         strokeLinecap="round" 
         strokeLinejoin="round"
       />
       {/* Door */}
       <path 
         d="M35 90 V55 H65 V90" 
         stroke="currentColor" 
         strokeWidth="6" 
         strokeLinecap="round" 
         strokeLinejoin="round"
       />
       {/* Circle Window */}
       <circle cx="50" cy="35" r="5" fill="currentColor" />
    </g>

    {/* Text Group */}
    <text x="150" y="80" textAnchor="middle" className="font-serif font-light text-3xl fill-current tracking-tight">
      Prem<tspan fontWeight="bold">Om</tspan>Properties
    </text>
    <text x="150" y="105" textAnchor="middle" className="font-sans font-light text-xs fill-current tracking-widest uppercase opacity-80">
      Secure Homes Crafted in Style
    </text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-neutral-800 pb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               {/* Scalable SVG Logo */}
               <div className="text-white opacity-90">
                 <BrandLogoInverse className="h-24 w-auto" />
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
