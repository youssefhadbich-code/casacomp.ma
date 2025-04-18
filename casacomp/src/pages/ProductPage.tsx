import React from 'react';
import ProductDetail from '../components/ProductDetail';

// Example product data
const exampleProduct = {
  id: 'mark-g15-30',
  name: 'MARK G15-30 Screw Compressor',
  subtitle: 'Industrial-grade rotary screw air compressor with premium efficiency',
  category: 'compressors',
  description: 'The MARK G15-30 is a state-of-the-art rotary screw compressor designed for industrial applications requiring reliable, efficient compressed air supply. Built with premium components and advanced technology, it delivers exceptional performance while minimizing energy consumption.',
  specifications: {
    'Motor Power': '15-30 kW',
    'Free Air Delivery': '2.3-5.4 m³/min',
    'Working Pressure': '7.5-13 bar',
    'Noise Level': '65-69 dB(A)',
    'Control System': 'Advanced Microprocessor',
    'Cooling Method': 'Air-cooled',
    'Oil Capacity': '15 L'
  },
  features: [
    'Advanced screw element design for optimal efficiency',
    'Integrated heat recovery system for energy savings',
    'Smart controller with remote monitoring capabilities',
    'Low-noise operation suitable for indoor installation',
    'Compact footprint maximizing floor space utilization',
    'Premium efficiency IE3 motor',
    'Automatic tensioning system for reliable operation'
  ],
  applications: [
    'Manufacturing facilities',
    'Automotive workshops',
    'Food and beverage production',
    'Pharmaceutical manufacturing',
    'General industrial applications'
  ],
  images: [
    {
      url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
      alt: 'MARK G15-30 Screw Compressor - Front View'
    },
    {
      url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
      alt: 'MARK G15-30 Screw Compressor - Side View'
    },
    {
      url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
      alt: 'MARK G15-30 Screw Compressor - Control Panel'
    },
    {
      url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
      alt: 'MARK G15-30 Screw Compressor - Internal View'
    }
  ],
  price: {
    value: 15999,
    currency: '$'
  },
  variants: [
    {
      id: 'g15',
      name: '15 kW',
      price: 15999
    },
    {
      id: 'g22',
      name: '22 kW',
      price: 19999
    },
    {
      id: 'g30',
      name: '30 kW',
      price: 24999
    }
  ],
  dimensions: {
    length: 1200,
    width: 800,
    height: 1100,
    weight: 450,
    unit: 'mm'
  },
  warranty: {
    duration: '2 years',
    coverage: 'Full parts and labor'
  },
  availability: 'in_stock',
  deliveryTime: '2-3 weeks',
  materials: [
    'Cast iron air end',
    'Aluminum coolers',
    'Steel frame',
    'Industrial-grade electrical components'
  ],
  maintenance: [
    'Regular oil and filter changes every 2000 hours',
    'Annual belt inspection and tensioning',
    'Quarterly condensate drain cleaning',
    'Bi-annual cooler cleaning',
    'Monthly visual inspection of components'
  ]
};

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProductDetail product={exampleProduct} />
    </div>
  );
};

export default ProductPage;