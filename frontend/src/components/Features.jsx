import React from 'react';
import { Shield, Home, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Safety First",
    description: "Every property is personally vetted to ensure a safe, secure environment for single women and families."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Curated Community",
    description: "We connect you with societies that are welcoming, educated, and match your lifestyle."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Premium Interiors",
    description: "Only well-maintained, semi or fully furnished homes that feel like a real home from day one."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Transparent Process",
    description: "No hidden clauses. We guide you through the documentation for a hassle-free move-in."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-2">Why Pune Trusts Prem Om Properties</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Moving to a new city or finding a new home can be daunting. We make it simple, safe, and warm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#FFF9F2] flex items-center justify-center text-neutral-800 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-heading font-medium text-lg mb-3">{feature.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
