import React from 'react';
import { ChevronRight, Package, Shield, Truck, PenTool, Star, Check, AlertCircle, Clock } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailProps {
  product: Product;
}

const getAvailabilityConfig = (status: string) => {
  const config = {
    in_stock: {
      icon: Check,
      text: 'In Stock',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    low_stock: {
      icon: AlertCircle,
      text: 'Low Stock',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    out_of_stock: {
      icon: Clock,
      text: 'Out of Stock',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  };
  return config[status] || config.in_stock;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const availability = getAvailabilityConfig(product.availability);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm mb-8">
        <a href="/" className="text-gray-500 hover:text-blue-600">Home</a>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <a href="/products" className="text-gray-500 hover:text-blue-600">Products</a>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product Overview */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        {/* Image Gallery */}
        <div className="space-y-6">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg">
            <img
              src={product.images[0].url}
              alt={product.images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {product.images.slice(1).map((image, index) => (
              <button
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:ring-2 hover:ring-blue-500 transition-all"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.subtitle}</p>
          </div>
          
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5"
                  fill={i < 4 ? "#FDB022" : "none"}
                  stroke={i < 4 ? "#FDB022" : "#D1D5DB"}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">(12 Reviews)</span>
            <div className={`flex items-center px-3 py-1 rounded-full ${availability.bgColor}`}>
              <availability.icon className={`w-4 h-4 ${availability.color} mr-2`} />
              <span className={`text-sm font-medium ${availability.color}`}>
                {availability.text}
              </span>
            </div>
          </div>

          <div className="text-4xl font-bold mb-8 text-blue-900">
            {product.price.currency} {product.price.value.toLocaleString()}
          </div>

          {/* Variants */}
          {product.variants && (
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-lg">Available Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <div className="font-semibold">{variant.name}</div>
                    <div className="text-gray-600">
                      {product.price.currency} {variant.price.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3">
              <Package className="w-5 h-5 text-blue-600 mr-3" />
              <span>Free shipping on orders over $5000</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mr-3" />
              <span>{product.warranty.duration} warranty</span>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-blue-600 mr-3" />
              <span>Delivery in {product.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-3">
              <PenTool className="w-5 h-5 text-blue-600 mr-3" />
              <span>Professional installation available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
              Request Quote
            </button>
            <button className="w-full border-2 border-blue-600 text-blue-600 py-4 px-8 rounded-xl font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-200">
              Download Specifications
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="border-t border-gray-200 pt-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Specifications */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-blue-900">Specifications</h2>
            <dl className="space-y-6 bg-gray-50 p-6 rounded-xl">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-semibold text-gray-600">{key}</dt>
                  <dd className="mt-2 text-lg">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Features & Benefits */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-blue-900">Features & Benefits</h2>
            <ul className="space-y-4 bg-gray-50 p-6 rounded-xl">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Maintenance */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-blue-900">Maintenance</h2>
            <ul className="space-y-4 bg-gray-50 p-6 rounded-xl">
              {product.maintenance.map((item, index) => (
                <li key={index} className="flex items-start">
                  <PenTool className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Technical Documents */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Technical Documents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="#" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <PenTool className="w-6 h-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Technical Datasheet</div>
              <div className="text-sm text-gray-500">PDF • 2.4 MB</div>
            </div>
          </a>
          <a href="#" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <Package className="w-6 h-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Installation Guide</div>
              <div className="text-sm text-gray-500">PDF • 1.8 MB</div>
            </div>
          </a>
          <a href="#" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <Shield className="w-6 h-6 text-blue-600 mr-4" />
            <div>
              <div className="font-semibold">Warranty Information</div>
              <div className="text-sm text-gray-500">PDF • 890 KB</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;