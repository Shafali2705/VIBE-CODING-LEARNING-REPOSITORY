import React from 'react';
import { IndianRupee, BedDouble, User } from 'lucide-react';
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

              <a href={`https://wa.me/919326071020?text=I'm%20interested%20in%20${option.type}%20rentals`} target="_blank" rel="noopener noreferrer">
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
          className="bg-neutral-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl mb-12"
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
          <a href="https://wa.me/919326071020?text=I'm%20looking%20for%20PG%20options%20for%20women" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <button className="bg-white text-neutral-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors">
              Enquire for PG
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
