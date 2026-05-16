import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What is a Pre-Inked Stamp?",
    answer: "Unlike traditional rubber stamps that require a separate ink pad, a pre-inked stamp has ink infused directly into the stamp material. This design allows for thousands of highly detailed, crisp impressions before needing a refill."
  },
  {
    id: 2,
    question: "How many impressions will I get before refilling?",
    answer: "A standard Mark Pre-Inked stamp typically yields between 10,000 to 50,000 impressions depending on the size of the stamp and the amount of ink applied during manufacturing."
  },
  {
    id: 3,
    question: "Can I refill my Pre-Inked Stamp?",
    answer: "Yes, absolutely! Refilling is quick, clean, and easy. Note: You MUST use specific pre-inked stamp fluid. Using regular stamp pad ink will clog the micropores and destroy the stamp."
  },
  {
    id: 4,
    question: "How long does it take to manufacture my custom stamp?",
    answer: "Once the artwork is approved, production typically takes 1 to 2 hours. Bulk orders may require additional time which will be communicated during ordering."
  },
  {
    id: 5,
    question: "Can a Pre-Inked Stamp include my company logo or a signature?",
    answer: "Yes. Due to the high-resolution nature of the manufacturing process, pre-inked stamps are excellent for detailed logos, signatures, intricate fonts, and even fine lines."
  },
  {
    id: 6,
    question: "What ink colors are available?",
    answer: "We offer standard professional colors including Blue, Black, Red, Green, and Purple. Multi-color stamps (where different words are different colors) are also possible for certain designs."
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <MessageCircle className="mx-auto h-12 w-12 text-red-600 mb-4" />
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
             Everything you need to know about Mark Pre-Inked Stamps.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={faq.id} 
                className={`border rounded-xl transition-colors ${isOpen ? 'border-red-200 bg-red-50/50' : 'border-gray-200 bg-white'}`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold pr-8 ${isOpen ? 'text-red-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-lg border-t border-red-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact fallback */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center shadow-inner">
           <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
           <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
           <button className="bg-gray-900 text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get in Touch
           </button>
        </div>

      </div>
    </div>
  );
}
