import React from 'react';
import { Clock, Coins, Wrench, Zap, CheckCircle, ArrowRight, Shield, Gauge } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick & Easy Installation',
    description: 'Up to 85% faster installation with our innovative push-to-fit technology'
  },
  {
    icon: Wrench,
    title: 'Corrosion-Free',
    description: 'Premium aluminum construction guarantees lifetime corrosion resistance'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Optimized flow design reduces pressure drop by up to 40%'
  },
  {
    icon: Coins,
    title: 'Cost Effective',
    description: 'Zero leakage guarantee helps save up to 30% on energy costs'
  }
];

const benefits = [
  'Modular design for easy expansion',
  'Lightweight yet extremely durable',
  '100% recyclable materials',
  'Compatible with existing systems',
  'Minimal pressure drop',
  'Zero corrosion guarantee'
];

const specifications = [
  {
    label: 'Working Pressure',
    value: '13 bar'
  },
  {
    label: 'Temperature Range',
    value: '-20°C to +70°C'
  },
  {
    label: 'Material',
    value: 'High-grade Aluminum'
  }
];

const Airnet = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <img
                src="https://i.ibb.co/Kzq2XGFb/airnet-logo-1.png"
                alt="AIRnet Logo"
                className="h-12 mb-6"
              />
              <h2 className="text-4xl font-bold text-white mb-6">
                AIRnet - The Future of Air Distribution
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Revolutionary aluminum piping system for compressed air, nitrogen, and vacuum.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Experience the next generation of compressed air distribution. AIRnet's innovative 
                design ensures maximum efficiency, minimal pressure drop, and unmatched durability 
                while being incredibly easy to install and maintain.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center group">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
              
              {/* Technical Specifications */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-12">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-3 gap-4">
                  {specifications.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <div className="text-sm text-blue-200 mb-1">{spec.label}</div>
                      <div className="text-lg font-semibold text-white">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
              <img
                src="https://www.aclengineering.co.uk/wp-content/uploads/2022/05/airnet-pipework-air-compressors.jpg"
                alt="AIRnet Piping System"
                className="w-full rounded-2xl shadow-lg"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] bg-blue-900/90 backdrop-blur-sm p-6 rounded-xl grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10</div>
                  <div className="text-blue-200 text-sm">Year Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-blue-200 text-sm">Faster Install</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">0%</div>
                  <div className="text-blue-200 text-sm">Leakage Rate</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Airnet;