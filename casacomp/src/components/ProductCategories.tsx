import React from 'react';

const categories = [
  {
    title: 'Screw Air Compressors',
    description: 'Premium rotary screw & piston compressors',
    image: 'https://www.mark-compressors.com/content/dam/brands/Mark/Air%20Compressors/Screw%20Compressors/rmb-rmc/image/mark_C90_pack_unit_fix_speed_hero.png/jcr:content/renditions/cq5dam.web.1200.628.png',
    link: '/products/compressors',
    promo: false
  },
  {
    title: 'Industrial Air Dryers',
    description: 'Advanced air treatment & filtration systems',
    image: 'https://atlascopco.scene7.com/is/image/atlascopco/mark-e11-trequarter-right1?$landscape800$&fmt=png-alpha',
    link: '/products/dryers',
    promo: false
  },
  {
    title: 'Air Storage',
    description: 'Industrial-grade air receivers & tanks',
    image: 'https://www.nieruf.fr/media/c7/c2/ba/1722253438/BE01000009_BE01010009_1.png?ts=1726741634',
    link: '/products/storage',
    promo: true
  },
  {
    title: 'Spare Parts',
    description: 'Original MARK parts & maintenance kits',
    image: 'https://i.ibb.co/6c5Ndh9s/Screenshot-9-4-2025-191957-www-ashair-co-nz.jpg',
    link: '/products/parts',
    promo: false
  }
];

const ProductCategories = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of MARK compressed air solutions,
            designed to meet your industrial needs with reliability and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.link}
              className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {category.promo && (
                <div className="absolute -right-12 top-8 bg-blue-600 text-white px-12 py-1 rotate-45 z-10 shadow-lg">
                  <span className="text-sm font-semibold">SPECIAL OFFER</span>
                </div>
              )}
              <div className="aspect-square mb-6 overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default ProductCategories;