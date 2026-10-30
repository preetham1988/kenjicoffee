import React from 'react';
import { motion } from 'framer-motion';
import OrderRequest from './OrderRequest';

const products = [
  {
    id: 1,
    name: "Mudigere Estate Reserve",
    type: "100% Arabica • Medium Roast",
    notes: "Bright, fruity, incredibly smooth.",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "The Ancestor's Filter Coffee",
    type: "Heritage Roast",
    notes: "Dark cocoa, roasted hazelnut, caramel, chicory.",
    profile: [
      ["Aroma", "Strong and earthy, with notes of dark cocoa, roasted nuts, caramel, and chicory."],
      ["Flavor", "Rich chocolate, roasted hazelnut, caramel, and a mild malty sweetness. Blends well with milk."],
      ["Acidity", "Low acidity with a smooth and mellow taste."],
      ["Body", "Thick, creamy, and syrupy with a rich mouthfeel."],
      ["Finish", "Long-lasting, warm, with notes of cocoa and pleasant bittersweetness."]
    ],
    price: "$22.00",
    image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Baba Budan Espresso",
    type: "Dark Roast",
    notes: "Earthy, bold, low-acidity.",
    price: "$26.00",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Products() {
  return (
    <section id="shop" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Freshly Roasted.</h2>
          <p className="font-sans text-lg uppercase tracking-[0.2em] text-kenjige-brown/60">From Our Estate to Your Door</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item} className="group">
              <div className="relative overflow-hidden mb-6 aspect-square bg-kenjige-cream rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-kenjige-brown px-8 py-3 uppercase tracking-widest text-sm font-medium">Add to Cart</button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-1">{product.name}</h3>
                <p className="font-sans text-sm uppercase tracking-wider text-kenjige-brown/60 mb-2">{product.type}</p>
                {product.profile ? (
                  <div className="text-left max-w-sm mx-auto my-4 pt-4 border-t border-kenjige-brown/15">
                    <p className="font-serif italic text-lg text-center mb-3">Cupping &amp; Sensory Profile</p>
                    <dl>
                      {product.profile.map(([term, description]) => (
                        <div key={term} className="grid grid-cols-[4.75rem_1fr] gap-3 py-1.5 border-b border-dashed border-kenjige-brown/10 last:border-b-0">
                          <dt className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-kenjige-green pt-0.5">{term}</dt>
                          <dd className="font-sans text-sm leading-relaxed text-kenjige-brown/80">{description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ) : (
                  <p className="font-sans text-sm italic text-kenjige-brown/80 mb-3">{product.notes}</p>
                )}
                <OrderRequest product={product} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}