import React from 'react';
import { Square, Wind, Wrench, Package } from 'lucide-react';

const services = [
  {
    icon: Square,
    title: 'Air Compressors',
    description: 'State-of-the-art compressed air systems for industrial applications',
  },
  {
    icon: Wind,
    title: 'Air Treatment',
    description: 'Complete range of dryers and filtration solutions',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: '24/7 emergency service and preventive maintenance programs',
  },
  {
    icon: Package,
    title: 'Original Spare Parts',
    description: 'Genuine MARK parts for optimal performance',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive industrial solutions designed to maximize your productivity
            and minimize downtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gray-800 p-8 rounded-lg hover:bg-blue-900 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;