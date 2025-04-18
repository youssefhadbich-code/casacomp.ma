import { Users, CheckCircle, Globe } from 'lucide-react';

const clients = [
  {
    name: 'Polyfil Maroc',
    logo: 'https://www.polyfil-maroc.com/images/logo.png'
  },
  {
    name: 'Bericolor',
    logo: 'https://www.lecreatif.ma/wp-content/uploads/2021/05/bericolor.png'
  },
  {
    name: 'Oxair',
    logo: 'https://www.oxair.ma/images/logo5.png'
  },
  {
    name: 'Clayens NP Morocco',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFfCHkZji2jsg/company-logo_200_200/company-logo_200_200/0/1683038725461?e=2147483647&v=beta&t=kTVxj9P1PUHItrQeZNa8yWs_LD534xtuRgqhvJf6jGE'
  },
  {
    name: 'Salidor',
    logo: 'https://salidor.com/wp-content/uploads/2024/07/salidor.png'
  }
];

const stats = [
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
  { icon: CheckCircle, value: '25+', label: 'Years Experience' },
  { icon: Globe, value: '300+', label: 'Satisfied Clients' }
];

const References = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join Morocco's leading companies who trust CASA COMP for their
            compressed air solutions and experience excellence in service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg">
              <stat.icon className="w-12 h-12 text-blue-600 mr-4" />
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-0" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/2] flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-[80px] object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default References;