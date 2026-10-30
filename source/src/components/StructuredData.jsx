import React from 'react';
import { BRAND, CONTACT_EMAIL } from '../config';
import { products } from '../data';

// schema.org data so search engines can show the farm and its coffees (name, price, brand) in results.
export default function StructuredData() {
  const origin = window.location.origin;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BRAND,
      url: origin,
      email: CONTACT_EMAIL,
      description: "Single-origin coffee from a family farm in Chikkamagaluru, India, three generations since the 1940s."
    },
    ...products.map((product) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.notes,
      image: new URL(product.image, origin).href,
      brand: { "@type": "Brand", name: BRAND },
      offers: {
        "@type": "Offer",
        price: product.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        url: `${origin}/#shop`
      }
    }))
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
