import React from 'react';
import { motion } from 'motion/react';

const products = [
  {
    id: 'p1',
    name: 'Sun Stamper Models',
    category: 'Portable & Pocket',
    size: 'Various Sizes',
    desc: 'Perfect for doctors, sales executives, and professionals on the move. Provides high-definition impressions that last thousands of times.',
    image: './sun-stamper.png',
    color: 'red',
  },
  {
    id: 'p2',
    name: 'Sunce Desktop Series',
    category: 'Address & Logo',
    size: 'Various Sizes',
    desc: 'Our popular desktop format. Ideal for company addresses, proprietor signatures, and multi-line custom text in the office.',
    image: './sunce.png',
    color: 'blue',
  },
  {
    id: 'p3',
    name: 'Exmark Self-Ink',
    category: 'Compact & Durable',
    size: 'Various Sizes',
    desc: 'The essential compact option. Rugged build quality perfect for high-frequency counter use, receipts, and professional certifications.',
    image: './exmark.png',
    color: 'emerald',
  },
  {
    id: 'p4',
    name: 'Neo Speedy',
    category: 'Fast & Reliable',
    size: 'Various Sizes',
    desc: 'Designed for quick repetitive stamping. Comfortable grip, smooth action, and exceptional clarity for all your daily tasks.',
    image: './neo-speedy.png',
    color: 'purple',
  },
];

export function Products() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Browse our range of premium Mark Pre-Inked Stamps. Designed for absolute clarity and durability.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col sm:flex-row gap-8 group"
            >
              {/* Product Image Poster */}
              <div className="w-full sm:w-48 aspect-[4/5] flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
              </div>
              
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1 block">
                          {product.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                   </div>
                </div>
                
                <div className="inline-block bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded mb-4 self-start">
                  Imprint Area: {product.size}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {product.desc}
                </p>

                <button className="self-start text-red-600 font-bold hover:text-red-700 hover:underline flex items-center gap-2">
                  Enquire Now <span>&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Box */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border-4 border-red-600 rounded-full opacity-20"></div>
           <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-4">Need a Custom Size or Format?</h3>
               <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                   Don't see your requirement here? We manufacture tailor-made stamp dies up to A4 sizes for specialized industrial use.
               </p>
               <a href="tel:+919081234419" className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                   Contact Sales Team
               </a>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
