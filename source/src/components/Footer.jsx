import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-kenjige-brown text-kenjige-cream py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-kenjige-cream/20 pb-12 mb-8">
        
        <div>
          <h4 className="font-serif text-2xl mb-6">Kenjige Coffee</h4>
          <p className="font-sans text-kenjige-cream/70 text-sm leading-relaxed max-w-xs">
            Heritage coffee grown, handpicked, and masterfully roasted on our family estate in Kenjige village, Mudigere. Now shipping nationwide across the USA.
          </p>
        </div>

        <div>
          <h4 className="font-sans uppercase tracking-widest text-sm font-medium mb-6">Explore</h4>
          <ul className="space-y-3 font-sans text-sm text-kenjige-cream/70">
            <li><a href="#" className="hover:text-white transition-colors">Shop Coffee</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
            <li><a href="mailto:kenjigefarms@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans uppercase tracking-widest text-sm font-medium mb-6">Join the Family</h4>
          <p className="font-sans text-kenjige-cream/70 text-sm mb-4">Subscribe for estate updates and 10% off your first order.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border border-kenjige-cream/30 px-4 py-2 w-full text-sm focus:outline-none focus:border-white text-white placeholder-kenjige-cream/50"
            />
            <button className="bg-kenjige-cream text-kenjige-brown px-6 py-2 uppercase tracking-widest text-xs font-medium hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-sans text-kenjige-cream/50">
        <p>© 2026 Kenjige Coffee. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}