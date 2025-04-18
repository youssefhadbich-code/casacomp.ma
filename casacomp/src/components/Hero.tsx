import React from 'react';
import { ArrowRight, Gauge, Shield, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="relative">
        <img
          src="https://i.ibb.co/0jxMw3bm/Mark-Web-Banners-page-0002.jpg"
          alt="MARK Compressors Banner"
          className="w-full object-contain max-h-[600px] bg-gray-900"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="absolute bottom-8 right-8 z-10">
          <div className="flex gap-4">
            <div className="flex flex-wrap gap-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md flex items-center group transition-all">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-md transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Hero;