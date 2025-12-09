import React from 'react';
import { IndianRupee, BedDouble, User, MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const rentalOptions = [
  {
    type: "1 BHK",
    price: 35000,
    suitableFor: "Singles / Couples",
    features: ["Semi Furnished", "Gated Security", "Power Backup"]
  },
  {
    type: "2 BHK",
    price: 55000,
    suitableFor: "Small Families",
    features: ["Fully Furnished", "Club House", "Covered Parking"]
  },
  {
    type: "3 BHK",
    price: 75000,
    suitableFor: "Large Families",
    features: ["Luxury Interiors", "Servant Room", "Gym Access"]
  }
];

const landmarks = [
  { name: "Osho International Meditation Resort", type: "Wellness" },
  { name: "Kopa Mall", type: "Shopping" },
  { name: "Nature's Basket", type: "Grocery" },
  { name: "Naturals Ice Cream", type: "Lifestyle" },
  { name: "German Bakery", type: "Dining" },
  { name: "Chabad House", type: "Community" },
];

export default function Rentals() {
  const maxPrice = 80000; 

  return (
    <section id="rentals" className="py-24 px-4 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-2">Homes as per your budget</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for verified properties in Koregaon Park's best societies.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {rentalOptions.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#FFF9F2] rounded-2xl p-6 border border-neutral-100 shadow-sm flex flex-col text-left"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <BedDouble className="w-6 h-6 text-neutral-800" />
                </div>
                <span className="text-xs font-medium bg-neutral-900 text-white px-3 py-1 rounded-full">
                  {option.type}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <IndianRupee className="w-5 h-5 text-neutral-800" />
                  <span className="text-3xl font-heading font-semibold text-neutral-900">
                    {option.price.toLocaleString()}
                  </span>
                  <span className="text-neutral-500 text-sm">/ month</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">Average Rental Value</p>
              </div>

              {/* Visual Price Indicator */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Price Scale</span>
                  <span>Premium</span>
                </div>
                <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(option.price / maxPrice) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-neutral-800 rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-6 flex-1">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    {feature}
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/910000000000?text=I'm%20interested%20in%20${option.type}%20rentals`} target="_blank" rel="noopener noreferrer">
                <button className="btn-secondary w-full text-sm py-2 bg-white">
                  Check Availability
                </button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* PG Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-neutral-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl mb-24"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 flex items-center gap-2">
                Looking for PG Accommodation?
                <span className="text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Women Only</span>
              </h3>
              <p className="text-neutral-400 text-sm">
                Safe, verified paying guest options available specifically for working women and students.
              </p>
            </div>
          </div>
          <a href="https://wa.me/910000000000?text=I'm%20looking%20for%20PG%20options%20for%20women" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <button className="bg-white text-neutral-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors">
              Enquire for PG
            </button>
          </a>
        </motion.div>

        {/* Location Map Section */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
           {/* Landmarks List */}
           <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="heading-3 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-neutral-800" /> Prime Location
                </h3>
                <p className="text-sm text-neutral-500">
                  Koregaon Park is Pune's most prestigious address. 
                  Green, peaceful, yet connected to everything you need.
                </p>
              </div>
              
              <div className="bg-[#FFF9F2] rounded-xl p-6 border border-neutral-100">
                <h4 className="font-heading font-medium text-sm text-neutral-400 uppercase tracking-wider mb-4">Key Landmarks</h4>
                <ul className="space-y-4">
                  {landmarks.map((landmark, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm group">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-green-500 transition-colors" />
                      <div>
                        <span className="block text-neutral-800 font-medium group-hover:text-green-700 transition-colors">{landmark.name}</span>
                        <span className="text-xs text-neutral-400">{landmark.type}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
           </div>

           {/* Map Embed */}
           <div className="lg:col-span-2 h-[400px] bg-neutral-100 rounded-2xl overflow-hidden shadow-inner border border-neutral-200 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.621473216858!2d73.88373755!3d18.53696755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa5d3c17%3A0x898363806c7e6cde!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Koregaon Park Map"
             ></iframe>
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-medium shadow-sm pointer-events-none">
                Serving KP & Surroundings
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
