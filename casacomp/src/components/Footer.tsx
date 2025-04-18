import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CASA COMP</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Bd 11 Janvier - 1 Etg Appt 1
                <br />CASABLANCA
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +212 668 281 346
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                contact@casacomp.ma
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="hover:text-blue-400">Products</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/resources" className="hover:text-blue-400">Resources</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/resources/manuals" className="hover:text-blue-400">Product Manuals</a></li>
              <li><a href="/resources/datasheets" className="hover:text-blue-400">Technical Datasheets</a></li>
              <li><a href="/resources/case-studies" className="hover:text-blue-400">Case Studies</a></li>
              <li><a href="/resources/faq" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="/resources/blog" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for industry insights and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 CASA COMP. All rights reserved.
              <span className="mx-2">|</span>
              <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;