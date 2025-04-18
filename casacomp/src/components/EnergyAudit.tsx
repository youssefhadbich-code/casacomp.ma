import React from 'react';
import { Gauge, Lightbulb, FileSpreadsheet, TrendingDown } from 'lucide-react';

const EnergyAudit = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-50 transform -skew-x-12" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Energy Optimization Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Maximize Efficiency with Our Energy Audit
          </h2>
          <p className="text-xl text-gray-600">
            Do you think that your compressed air system can be improved and optimised but you don't have the skills or means to make sure of it?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="relative">
            <div className="aspect-square rounded-full bg-blue-500/10 absolute -top-8 -left-8 w-32 h-32" />
            <div className="aspect-square rounded-full bg-blue-500/10 absolute -bottom-8 -right-8 w-48 h-48" />
            <img
              src="https://atlascopco.scene7.com/is/image/atlascopco/iiTrax+Audit?$landscape1280$"
              alt="Energy Audit Process"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <div className="space-y-8">
              {[
                {
                  icon: Gauge,
                  title: 'System Analysis',
                  description: 'Comprehensive evaluation of your current system performance and efficiency levels'
                },
                {
                  icon: Lightbulb,
                  title: 'Optimization Recommendations',
                  description: 'Expert suggestions for improving system efficiency and reducing energy consumption'
                },
                {
                  icon: FileSpreadsheet,
                  title: 'Detailed Reporting',
                  description: 'In-depth analysis reports with actionable insights and ROI calculations'
                },
                {
                  icon: TrendingDown,
                  title: 'Cost Reduction',
                  description: 'Identify potential savings and implement energy-efficient solutions'
                }
              ].map((feature) => (
                <div key={feature.title} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
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
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform -skew-y-3 rounded-3xl" />
          {[
            { value: '30%', label: 'Average Energy Savings' },
            { value: '24/7', label: 'Monitoring Coverage' },
            { value: '100%', label: 'Detailed Analysis' }
          ].map((stat) => (
            <div key={stat.label} className="relative p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-8">
            CASA COMP / MARK will be able to help you in your approach, because auditing is a major focus of our business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center group w-full sm:w-auto">
              <span>Enquire an Energy Audit</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyAudit;