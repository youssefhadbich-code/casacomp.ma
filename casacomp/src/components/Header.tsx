import React from 'react';
import { Phone, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <span className="text-sm font-medium">Exclusive distributor of</span>
          <div className="h-6 mx-2 bg-white px-3 rounded">
            <img
              src="https://www.mark-compressors.com/etc.clientlibs/settings/wcm/designs/mark/clientlib-preloaded/resources/img/png/logo.png"
              alt="MARK Compressors"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="text-sm font-medium flex items-center gap-2">
            in Morocco
            <img
              src="https://i.ibb.co/3mnnFh9M/morocco.png"
              alt="Moroccan Flag"
              className="w-4 h-4 object-contain"
            />
          </span>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.ibb.co/W9mnXGS/logo-casacomp-2.png" 
              alt="CASA COMP Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center text-blue-600">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-semibold">Emergency Service: +212 668 281 346</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <div className="relative group">
              <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                <a href="/products/compressors" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Air Compressors</a>
                <a href="/products/dryers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Air Dryers</a>
                <a href="/products/storage" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Storage Solutions</a>
                <a href="/products/parts" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Parts & Accessories</a>
              </div>
            </div>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/resources" className="text-gray-700 hover:text-blue-600">Resources</a>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <div className="space-y-2 pl-4">
                <a href="/products/compressors" className="block text-gray-700 hover:text-blue-600">Air Compressors</a>
                <a href="/products/dryers" className="block text-gray-700 hover:text-blue-600">Air Dryers</a>
                <a href="/products/storage" className="block text-gray-700 hover:text-blue-600">Storage Solutions</a>
                <a href="/products/parts" className="block text-gray-700 hover:text-blue-600">Parts & Accessories</a>
              </div>
              <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="/resources" className="text-gray-700 hover:text-blue-600">Resources</a>
            </div>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;