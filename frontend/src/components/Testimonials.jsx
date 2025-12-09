import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Finding a safe place as a single working woman in Pune was stressing me out. Prem Om Properties didn't just find me a flat; they found me a society where I feel completely at home.",
    author: "Aditi Rao",
    role: "Software Engineer",
    initial: "A"
  },
  {
    text: "We wanted a 3BHK near Osho Ashram for our family. The transparency and professionalism showed by the team was refreshing. No hidden costs, just honest advice.",
    author: "The Mehta Family",
    role: "Business Owners",
    initial: "M"
  },
  {
    text: "Moving from Mumbai, I needed something quick but premium. They understood my taste immediately. I moved into a beautifully furnished apartment in 3 days.",
    author: "Sanya K.",
    role: "Fashion Designer",
    initial: "S"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#FFF9F2] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Header Area */}
          <div className="md:w-1/3 space-y-6 sticky top-24">
            <div className="inline-flex items-center gap-2 text-neutral-400 uppercase tracking-widest text-xs font-medium">
              <span className="w-8 h-px bg-neutral-400"></span>
              Stories
            </div>
            <h2 className="heading-2">Trusted by 500+ Happy Families</h2>
            <p className="text-neutral-500 leading-relaxed">
              Our greatest achievement is the trust of our clients. 
              Here is what they have to say about their home-finding journey with us.
            </p>
            <div className="hidden md:block">
               <button className="btn-secondary text-sm">Read More Stories</button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="md:w-2/3 grid gap-6">
            {testimonials.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 relative group hover:shadow-md transition-shadow"
              >
                <Quote className="absolute top-8 right-8 w-8 h-8 text-neutral-100 group-hover:text-neutral-200 transition-colors" />
                
                <p className="text-neutral-600 leading-relaxed mb-6 relative z-10">
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-serif text-lg">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-sm text-neutral-900">{item.author}</h4>
                    <p className="text-xs text-neutral-400">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
