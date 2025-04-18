import React from 'react';
import { Clock, Wrench, ShieldCheck, PhoneCall, Users } from 'lucide-react';

const MaintenanceService = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Honeycomb Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm13.312 0L44.143 8.485 42.728 9.9l-7.9-7.9h.828zm-9.9 0L23.344 2.828 21.93 1.414 19.1 0h6.657zm6.485 0L41.273 2.828 42.687 1.414 45.516 0h-6.656zM38.16 0L40.99 2.828l1.414-1.414L40.99 0h-2.83zm-7.07 0l2.828 2.828-1.414 1.414L29.677 0h1.414zM0 0l2.828 2.828-1.414 1.414L0 2.828V0zm52.627 0l2.828 2.828-1.414 1.414L51.627 0h1zM11.03 0L8.202 2.828l1.414 1.414L11.03 2.828V0zM5.373 0L2.545 2.828l1.414 1.414L5.373 2.828V0zm48.97 0L46.515 2.828l1.414 1.414L49.343 2.828V0zm-7.07 0l-2.828 2.828 1.414 1.414L47.273 2.828V0zm-6.485 0l-2.828 2.828 1.414 1.414L40.787 2.828V0zm-6.485 0l-2.828 2.828 1.414 1.414L34.303 2.828V0zm-6.485 0l-2.828 2.828 1.414 1.414L27.818 2.828V0zm-6.485 0l-2.828 2.828 1.414 1.414L21.333 2.828V0zm-6.485 0L8.202 2.828l1.414 1.414L14.848 2.828V0z' fill='%239C92AC' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-3xl transform rotate-3" />
              <img
                src="https://i.ibb.co/zWw4HYPJ/3zcmhepm.png"
                alt="Maintenance Team"
                className="relative rounded-3xl shadow-2xl"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Service</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-8 -top-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Expert Technicians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Compressor Maintenance Service
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Trust our certified technicians for all your compressed air system maintenance needs. 
                We ensure peak performance and reliability with genuine parts and 24/7 emergency support.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                {
                  icon: Wrench,
                  title: 'Expert Technical Team',
                  description: 'Our certified technicians undergo rigorous training to provide the highest quality service for all compressor brands and models.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Original Spare Parts',
                  description: 'We exclusively use genuine MARK parts to ensure optimal performance, reliability, and longevity of your equipment.'
                },
                {
                  icon: PhoneCall,
                  title: '24/7 Emergency Response',
                  description: 'Our emergency service team is available around the clock to minimize downtime and keep your operations running.'
                }
              ].map((feature) => (
                <div key={feature.title} className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Request Button */}
            <div className="mt-12">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-3">
                <Wrench className="w-6 h-6" />
                <span>Schedule Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceService;