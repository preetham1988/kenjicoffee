import React from 'react';
import { BRAND } from '../config';

const links = [
  { href: "#shop", label: "Coffee" },
  { href: "#specialty", label: "Why specialty", wide: true },
  { href: "#heritage", label: "Estate", wide: true },
  { href: "#about", label: "Family", wide: true }
];

export default function Nav() {
  return (
    <>
      <div className="bg-ink text-paper/90 text-center text-[12px] md:text-[13px] px-5 py-2">
        Specialty single-origin coffee from our family farm in Chikkamagaluru, India. <span className="whitespace-nowrap">Shipping across the USA.</span>
      </div>
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-xl backdrop-saturate-150 border-b border-line/70">
        <nav className="max-w-6xl mx-auto h-12 px-5 md:px-8 flex items-center justify-between text-[13px]">
          <a href="#top" className="font-semibold tracking-[0.18em] uppercase text-[12px] whitespace-nowrap">{BRAND}</a>
          <div className="flex items-center gap-6 md:gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-ink/80 hover:text-ink transition-colors ${link.wide ? "hidden sm:inline" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              className="rounded-full bg-ink text-white px-3.5 py-1 text-[12px] font-medium hover:bg-ink/85 transition-colors"
            >
              Order
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
