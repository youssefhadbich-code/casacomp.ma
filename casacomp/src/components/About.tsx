import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              CASA COMP - Exclusive Distributor of MARK COMPRESSOR in Morocco
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              CASA COMP is proud to be the exclusive distributor of MARK COMPRESSOR Brand in Morocco part of Atlas Copco Group.
              This leading brand is celebrated for its innovative engineering and state-of-the-art
              compression solutions, designed to deliver reliable performance and energy efficiency
              for industrial applications. Trust MARK COMPRESSOR for durable, cost-effective, and
              high-quality systems that power your operations sustainably.
            </p>
            
            <div className="space-y-4">
              {[
                'Official MARK COMPRESSOR Distributor',
                'Comprehensive After-Sales Support',
                'Genuine Parts & Accessories',
                'Expert Installation & Maintenance',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQHU5G7NpXsizA/feedshare-shrink_800/B56ZU9u9UgGQAk-/0/1740497475986?e=1747267200&v=beta&t=ox6HdHOpcqePHJsG_DZoKjxmmKKq4Ecce9791vSBbnc"
                alt="Industrial Equipment"
                className="rounded-lg h-64 w-full object-cover shadow-lg"
              />
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB9A2muqSm37bZtVyI7FV-4fl6nX2w6Za8WNv25mJ_jpNb0BJkny7PYTRrkmzRekbF4fMulSe53GT5lEybdgenN62MZULjetUEeV6WkBAci89vzbY7Rkae_s81DrK53xzbq9NsZP=s680-w680-h510"
                alt="Service Technician"
                className="rounded-lg h-32 w-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D10AQHe0Dqt_3ZehA/image-shrink_800/image-shrink_800/0/1718583667131?e=1744826400&v=beta&t=stZ74uFiGCVGR559lA8uShr5MGc4dQ0TZkYfXhDNLVM"
                alt="Factory Floor"
                className="rounded-lg h-32 w-full object-cover shadow-lg"
              />
              <img
                src="https://atlascopco.scene7.com/is/image/atlascopco/Original+Service+Ceccato1?$landscape1280$"
                alt="Control Panel"
                className="rounded-lg h-64 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;