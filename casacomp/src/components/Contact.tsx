import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need emergency service, preventive maintenance, or a complete
              system design, our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+212 668 281 346</p>
                  <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@casacomp.ma</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">
                    Bd 11 Janvier - 1 Etg Appt 1
                    <br />
                    CASABLANCA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;