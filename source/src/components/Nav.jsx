import React from 'react';

const links = [
  { href: "#heritage", label: "Estate" },
  { href: "#about", label: "Family" },
  { href: "#shop", label: "Coffee" }
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-xl backdrop-saturate-150 border-b border-line/70">
      <nav className="max-w-6xl mx-auto h-12 px-5 md:px-8 flex items-center justify-between text-[13px]">
        <a href="#top" className="font-semibold tracking-[0.18em] uppercase text-[12px]">Kenjige</a>
        <div className="flex items-center gap-6 md:gap-9">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-ink/80 hover:text-ink transition-colors">
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
  );
}
