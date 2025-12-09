import React from 'react';

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-[#F8F3ED] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 border border-neutral-100/50 shadow-sm">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-white/60 rounded-full text-xs font-medium tracking-wider uppercase text-neutral-500">
              About Us
            </div>
            <h2 className="heading-2">A Personal Touch in Real Estate</h2>
            <p className="body-large text-neutral-600">
              At Prem Om Properties, we understand that finding a home is about more than just square footage. It's about finding a space where you feel safe, inspired, and at peace.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Specializing in the needs of working women and families, we take pride in offering a curated selection of homes in Pune's safest and most vibrant neighborhoods. We don't just show properties; we help you settle into your new life.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="h-px bg-neutral-300 flex-1"></div>
                <span className="font-heading text-lg font-medium text-neutral-800">Your Local Expert</span>
                <div className="h-px bg-neutral-300 flex-1"></div>
              </div>
            </div>
          </div>

          {/* Visual Element - Abstract/Warm */}
          <div className="flex-1 w-full max-w-sm">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-white p-2 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="absolute inset-0 border-[1px] border-neutral-200 m-2 rounded-xl z-10"></div>
               <img 
                 src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800"
                 alt="Warm Interior Detail"
                 className="w-full h-full object-cover rounded-xl"
               />
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-lg z-20 text-center shadow-lg border border-white">
                 <p className="font-heading font-medium text-neutral-800">Premium & Safe</p>
                 <p className="text-xs text-neutral-500 mt-1">Verified Listings Only</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
