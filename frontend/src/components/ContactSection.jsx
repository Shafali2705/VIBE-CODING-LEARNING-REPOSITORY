import React from 'react';
import { Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-24 px-4 bg-[#FFF9F2] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5EBE0] opacity-50 -skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-10">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[#8D6E63] uppercase mb-2 block">Get in Touch</span>
              <h2 className="heading-1 mb-6 text-[#3E2723]">Looking to Buy or<br/>Sell Property?</h2>
              <p className="text-[#5D4037] text-lg leading-relaxed max-w-md">
                Our experienced team is here to help you find your dream home or get the best price for your property. We've got you covered.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-[#EFEBE9]">
                <div className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#5D4037] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-[#3E2723] mb-1">Call Us Directly</h4>
                  <p className="text-[#8D6E63] text-sm mb-2">Mon - Sat, 9am - 7pm</p>
                  <a href="tel:+919326071020" className="text-xl font-semibold text-[#5D4037] hover:underline">
                    +91 93260 71020
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-[#EFEBE9]">
                <div className="w-12 h-12 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#5D4037] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-[#3E2723] mb-1">Email Us</h4>
                  <p className="text-[#8D6E63] text-sm mb-2">We reply within 24 hours</p>
                  <a href="mailto:tripatnaz@gmail.com" className="text-xl font-semibold text-[#5D4037] hover:underline">
                    tripatnaz@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#EFEBE9]">
            <h3 className="heading-3 mb-6 text-[#3E2723]">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#5D4037]">Your Name</Label>
                  <Input id="name" placeholder="John Doe" className="h-12 border-[#D7CCC8] focus:border-[#5D4037] bg-[#FFF9F2]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#5D4037]">Phone Number</Label>
                  <Input id="phone" placeholder="+91..." className="h-12 border-[#D7CCC8] focus:border-[#5D4037] bg-[#FFF9F2]" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#5D4037]">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-12 border-[#D7CCC8] focus:border-[#5D4037] bg-[#FFF9F2]" />
              </div>

              <div className="space-y-2">
                <Label className="text-[#5D4037]">I am interested in</Label>
                <Select>
                  <SelectTrigger className="h-12 border-[#D7CCC8] focus:border-[#5D4037] bg-[#FFF9F2]">
                    <SelectValue placeholder="Buying a Property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buying a Property</SelectItem>
                    <SelectItem value="sell">Selling a Property</SelectItem>
                    <SelectItem value="rent">Looking for Rental</SelectItem>
                    <SelectItem value="invest">Investment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#5D4037]">Your Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your requirements..." 
                  className="min-h-[120px] border-[#D7CCC8] focus:border-[#5D4037] bg-[#FFF9F2] resize-none" 
                />
              </div>

              <Button className="w-full h-14 bg-[#5D4037] hover:bg-[#3E2723] text-white rounded-full text-lg uppercase tracking-wide font-medium shadow-lg hover:shadow-xl transition-all">
                Send Message <Send size={18} className="ml-2" />
              </Button>
              
              <div className="relative flex items-center gap-4 py-2">
                <div className="h-px bg-[#EFEBE9] flex-1"></div>
                <span className="text-xs text-[#8D6E63] uppercase tracking-widest">Or Chat Instantly</span>
                <div className="h-px bg-[#EFEBE9] flex-1"></div>
              </div>

               <a href="https://wa.me/919326071020" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" type="button" className="w-full h-12 border-[#5D4037] text-[#5D4037] hover:bg-[#FFF9F2] rounded-full">
                  <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
                </Button>
              </a>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
