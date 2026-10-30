import React from 'react';
import { CONTACT_EMAIL } from '../config';

const links = [
  { href: "#shop", label: "Coffee" },
  { href: "#heritage", label: "Estate" },
  { href: "#pitch", label: "The pitch" },
  { href: "#about", label: "Family" },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="bg-sand px-5 md:px-8 pt-16 pb-10 text-[13px] text-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-8 border-b border-line">
          <div>
            <p className="text-ink font-semibold tracking-[0.18em] uppercase text-[12px]">Kenjige</p>
            <p className="mt-3 max-w-sm leading-relaxed">
              Grown, handpicked and roasted on our family estate in Kenjige village, Mudigere. Now shipping across the United States.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-ink transition-colors">{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="pt-6 flex flex-col md:flex-row md:justify-between gap-2">
          <p>© {new Date().getFullYear()} Kenjige Coffee. All rights reserved.</p>
          <p>
            Questions? <a href={`mailto:${CONTACT_EMAIL}`} className="text-leaf hover:underline underline-offset-2">{CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
