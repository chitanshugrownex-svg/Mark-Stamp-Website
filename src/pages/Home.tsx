import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, Droplet, Star, ArrowRight, Landmark, Hospital, Building2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const clients = [
  { name: 'Apollo Hospitals', image: './apollo-hospitals.png' },
  { name: 'Axis Bank', image: './axis-bank.png' },
  { name: 'HDFC Bank', image: './hdfc-bank.png' },
  { name: 'Larsen & Toubro', image: './larsen-&-toubro.png' },
  { name: 'LIC', image: './lic.png' },
  { name: 'National Insurance', image: './national-insurance.png' },
  { name: 'Parul University', image: './parul-university.png' },
  { name: 'State Bank of India', image: './state-bank-of-india.png' },
];

const heroProducts = [
  { src: './sun-stamper.png', name: 'Sun Stamper Model' },
  { src: './sunce.png', name: 'Sunce Series' },
  { src: './exmark.png', name: 'Exmark Self-Ink' },
  { src: './neo-speedy.png', name: 'Neo Speedy' }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-red-200 opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Make Your <span className="text-red-600 block">Perfect Mark.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Premium, high-definition pre-inked stamps designed for professionals. Experience thousands of crisp impressions without a messy stamp pad.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-2 group">
                  View Catalog
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/faq" className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            {/* Hero Product Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block w-full max-w-lg mx-auto"
            >
              {/* Decorative background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-100 to-orange-50 rounded-[3rem] -rotate-3 -z-10 blur-sm"></div>
              
              <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-3 overflow-hidden relative">
                {/* Badge */}
                <div className="absolute top-6 left-6 z-20 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
                  Featured Series
                </div>
                
                {/* Main Feature Image - Poster Style */}
                <div className="bg-gray-50 rounded-3xl aspect-[3/4] sm:aspect-[4/5] max-h-[600px] w-full flex items-center justify-center relative overflow-hidden group shadow-inner border border-gray-100/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentSlide}
                      src={heroProducts[currentSlide].src} 
                      alt={heroProducts[currentSlide].name} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out p-8"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Dots Row */}
                <div className="flex justify-center gap-3 mt-6">
                  {heroProducts.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-8 bg-red-600' : 'w-2.5 bg-gray-300 hover:bg-red-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4">
                 <ShieldCheck size={18} />
                 Official Authorized Custom Stamp Provider
             </div>
             <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                A Legacy of Trust Since 1998
             </h2>
             <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
               For over two decades, we have been the preferred stamp manufacturer for thousands of leading institutions.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4 }}
               className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
             >
                <Landmark className="mx-auto text-red-600 mb-3" size={36} />
                <h3 className="font-bold text-gray-900">Banks & Financial</h3>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.1 }}
               className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
             >
                <Hospital className="mx-auto text-red-600 mb-3" size={36} />
                <h3 className="font-bold text-gray-900">Hospitals & Labs</h3>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.2 }}
               className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
             >
                <Building2 className="mx-auto text-red-600 mb-3" size={36} />
                <h3 className="font-bold text-gray-900">Multinational Companies</h3>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.3 }}
               className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
             >
                <GraduationCap className="mx-auto text-red-600 mb-3" size={36} />
                <h3 className="font-bold text-gray-900">Schools & Colleges</h3>
             </motion.div>
          </div>

          {/* Client Marquee */}
          <div className="mt-20 pt-10 border-t border-gray-200 overflow-hidden relative">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Serving Thousands of Organizations</h3>
            
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              <div className="flex justify-around items-center px-6 md:px-10 gap-12 md:gap-20">
                {clients.map(client => (
                  <div key={client.name} className="flex-shrink-0 w-32 md:w-48 flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="max-h-16 md:max-h-20 max-w-full object-contain"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden font-bold text-gray-500 text-center text-sm">{client.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-around items-center px-6 md:px-10 gap-12 md:gap-20" aria-hidden="true">
                {clients.map(client => (
                  <div key={client.name + '-dup'} className="flex-shrink-0 w-32 md:w-48 flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="max-h-16 md:max-h-20 max-w-full object-contain"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden font-bold text-gray-500 text-center text-sm">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradients to fade edges */}
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Why Pre-Inked Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Why Choose Pre-Inked Stamps?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              A technological leap from traditional rubber stamps. Ink is infused directly into the die material.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplet className="text-white" size={24} />,
                title: "No Stamp Pad Required",
                desc: "The ink is built inside the stamp! Just press down for a perfect impression every time.",
                color: "bg-blue-500"
              },
              {
                icon: <Zap className="text-white" size={24} />,
                title: "Crystal Clear Quality",
                desc: "Provides sharp, high-resolution text and logos that traditional rubber stamps cannot match.",
                color: "bg-red-600"
              },
              {
                icon: <ShieldCheck className="text-white" size={24} />,
                title: "Long Lasting",
                desc: "Get up to thousands of pristine impressions before ever needing to add a refill drop of ink.",
                color: "bg-green-500"
              },
              {
                icon: <Star className="text-white" size={24} />,
                title: "Zero Mess",
                desc: "Say goodbye to inky fingers and stained desks. Refilling is clean, quick, and simple.",
                color: "bg-purple-500"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6 shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Stamps in Bulk?</h2>
          <p className="text-red-100 text-xl mb-8">
            Get in touch with us for customized bulk orders and special pricing tailored to your business needs.
          </p>
          <a 
            href="https://forms.gle/AjDNvtRgG96ZpctKA" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-700 font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:bg-gray-50 transition-colors"
          >
            Contact For Bulk Order
          </a>
        </div>
      </section>
    </div>
  );
}
