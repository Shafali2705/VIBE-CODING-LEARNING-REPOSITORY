import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Home } from 'lucide-react';

export default function BuyHomeModal({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
        setOpen(false);
        // Could trigger a toast here
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#FFF9F2] border-neutral-200">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-center pb-2">Find Your Dream Home</DialogTitle>
          <p className="text-center text-neutral-500 text-sm">
            Tell us what you are looking for, and we will find the perfect match.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-neutral-600">Name</Label>
              <Input id="name" placeholder="Your Name" className="bg-white border-neutral-300 focus:border-neutral-900" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-neutral-600">Phone</Label>
              <Input id="phone" placeholder="+91 00000 00000" className="bg-white border-neutral-300 focus:border-neutral-900" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-600">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="bg-white border-neutral-300 focus:border-neutral-900" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-neutral-600">Configuration</Label>
              <Select>
                <SelectTrigger className="bg-white border-neutral-300">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="1bhk">1 BHK</SelectItem>
                  <SelectItem value="2bhk">2 BHK</SelectItem>
                  <SelectItem value="3bhk">3 BHK</SelectItem>
                  <SelectItem value="villa">Row House / Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="space-y-2">
              <Label className="text-neutral-600">Budget Range</Label>
              <Select>
                <SelectTrigger className="bg-white border-neutral-300">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="50l-1cr">₹50L - ₹1 Cr</SelectItem>
                  <SelectItem value="1cr-2cr">₹1 Cr - ₹2 Cr</SelectItem>
                  <SelectItem value="2cr+">₹2 Cr+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-neutral-600">Specific Requirements</Label>
            <Textarea 
                id="message" 
                placeholder="E.g., Park view, Vastu compliant, Near Osho Ashram..." 
                className="bg-white border-neutral-300 focus:border-neutral-900 min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full bg-neutral-900 text-white hover:bg-neutral-800 h-12 text-md uppercase tracking-wide">
            Request Callback
          </Button>

          <p className="text-xs text-center text-neutral-400">
            Your details are safe with us. We do not spam.
          </p>

        </form>
      </DialogContent>
    </Dialog>
  );
}
