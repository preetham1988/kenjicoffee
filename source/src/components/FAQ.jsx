import React from 'react';
import Reveal from './Reveal';
import { CONTACT_EMAIL } from '../config';

const questions = [
  {
    q: "How do I order?",
    a: <>Tap <strong className="font-medium text-ink">Order</strong> next to any coffee and leave your phone number or email. We'll get in touch to confirm your order and delivery. You can also write to us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-leaf hover:underline underline-offset-2">{CONTACT_EMAIL}</a>.</>
  },
  {
    q: "Can I get coffee every month?",
    a: <>Yes. Choose <strong className="font-medium text-ink">Every month</strong> when you order, and we'll arrange regular deliveries with you.</>
  },
  {
    q: "Where do you ship?",
    a: "Anywhere in the United States."
  },
  {
    q: "What makes coffee specialty?",
    a: <>It's judged on quality. Specialty coffee scores 80 or more out of 100 when tasted by trained cuppers, and is hand-picked and sorted with care. <a href="#specialty" className="text-leaf hover:underline underline-offset-2">See how it compares <span aria-hidden="true">›</span></a></>
  },
  {
    q: "What does single origin mean?",
    a: "Every bean comes from one place. Ours are grown on our family farm in Chikkamagaluru, India, so what's in your cup tastes of where it was grown."
  },
  {
    q: "What is South Indian filter coffee?",
    a: <>A strong coffee decoction brewed slowly in a two-part metal filter, mixed with hot milk and a little sugar, then frothed by pouring between a dabara and tumbler. <a href="#brew" className="text-leaf hover:underline underline-offset-2">See how to make it <span aria-hidden="true">›</span></a></>
  },
  {
    q: "How should I store my coffee?",
    a: "In an airtight container in a cool, dark cupboard, away from heat, light and moisture. Skip the fridge: it adds moisture and picks up odors. Coffee tastes best within a few weeks of opening."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-sand py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16">
        <Reveal>
          <p className="text-sm font-medium text-leaf mb-4">Good to know</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-[-0.01em] leading-[1.05]">Questions, answered.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {questions.map(({ q, a }) => (
              <details key={q} className="group border-b border-line">
                <summary className="flex items-center justify-between gap-6 py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-lg md:text-xl font-medium">{q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-7 h-7 rounded-full border border-line grid place-items-center text-muted transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-[16px] leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
