import React from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Certified Quality Management System'
  },
  {
    icon: Shield,
    title: 'ASME Certified',
    description: 'Pressure Vessel Standards Compliance'
  },
  {
    icon: CheckCircle,
    title: 'Atlas Copco Certified',
    description: 'Authorized MARK Distributor'
  }
];

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <cert.icon className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;