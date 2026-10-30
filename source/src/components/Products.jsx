import React from 'react';
import Reveal from './Reveal';
import OrderRequest from './OrderRequest';
import { products } from '../data';

export default function Products() {
  return (
    <section id="shop" className="bg-sand py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-leaf mb-4">The coffee</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">Freshly roasted.</h2>
          <p className="mt-5 text-lg md:text-xl text-muted">From our estate to your door.</p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08} className="h-full">
              <article className="h-full flex flex-col bg-white rounded-[1.75rem] p-4 pb-8 text-center">
                <div className="aspect-square overflow-hidden rounded-[1.25rem] bg-sand">
                  <img src={product.image} alt={product.imageAlt || product.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="mt-7 text-[13px] text-muted">{product.type}</p>
                <h3 className="mt-1 text-[1.6rem] leading-tight font-serif px-2">{product.name}</h3>
                <p className="mt-3 text-[15px] text-muted px-4">{product.notes}</p>
                {product.profile && (
                  <a href="#profile" className="inline-block mt-3 text-[15px] text-leaf hover:underline underline-offset-4">
                    Cupping &amp; sensory profile <span aria-hidden="true">›</span>
                  </a>
                )}
                <div className="mt-auto pt-6 px-2">
                  <OrderRequest product={product} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
