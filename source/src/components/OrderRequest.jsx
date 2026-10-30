import React, { useState } from 'react';
import { SHEETS_WEBHOOK_URL, CONTACT_EMAIL } from '../config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function contactType(value) {
  if (EMAIL_RE.test(value)) return "email";
  const digits = value.replace(/[\s().-]/g, "");
  if (/^\+?\d{7,15}$/.test(digits)) return "phone";
  return null;
}

export default function OrderRequest({ product }) {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, left empty by people
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error
  const [error, setError] = useState("");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Order: ${product.name}`)}`;

  async function handleSubmit(e) {
    e.preventDefault();
    const value = contact.trim();
    const type = contactType(value);
    if (!type) {
      setError("Please enter a valid phone number or email.");
      return;
    }
    setError("");

    if (!SHEETS_WEBHOOK_URL) {
      window.location.href = `${mailto}&body=${encodeURIComponent(`I'd like to order ${product.name} (${product.price}).\nPlease contact me at: ${value}`)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      // Apps Script doesn't send CORS headers, so the response is opaque; a network failure still throws.
      await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          product: product.name,
          price: product.price,
          contact: value,
          contactType: type,
          page: window.location.href,
          website
        })
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div>
        <p className="font-sans font-medium">{product.price}</p>
        <p className="font-sans text-sm text-kenjige-green mt-3" role="status">
          {status === "sent"
            ? "Thank you! We'll reach out shortly to confirm your order."
            : <>Your email app should open with your request. Just press send, or write to <a href={mailto} className="underline">{CONTACT_EMAIL}</a>.</>}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <p className="font-sans font-medium">{product.price}</p>
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border border-kenjige-brown text-kenjige-brown px-5 py-2 uppercase tracking-widest text-xs font-medium hover:bg-kenjige-brown hover:text-kenjige-cream transition-colors"
          >
            Order Now
          </button>
        )}
      </div>
      {open && (
        <form onSubmit={handleSubmit} className="max-w-xs mx-auto text-left mt-4" noValidate>
          <label htmlFor={`contact-${product.id}`} className="block font-sans text-xs uppercase tracking-[0.15em] text-kenjige-brown/60 mb-2">
            Your phone number or email
          </label>
          <div className="flex">
            <input
              id={`contact-${product.id}`}
              type="text"
              autoComplete="email"
              autoFocus
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+1 555 123 4567 or you@email.com"
              className="min-w-0 flex-1 bg-transparent border border-kenjige-brown/30 px-3 py-2 text-sm focus:outline-none focus:border-kenjige-brown placeholder-kenjige-brown/40"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-kenjige-brown text-kenjige-cream px-4 py-2 uppercase tracking-widest text-xs font-medium hover:bg-kenjige-green transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </div>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
          />
          {error && <p className="font-sans text-xs text-red-700 mt-2">{error}</p>}
          {status === "error" && (
            <p className="font-sans text-xs text-red-700 mt-2">Something went wrong. Please email us instead.</p>
          )}
          <p className="font-sans text-xs text-kenjige-brown/60 mt-3">
            We'll contact you to confirm your order. Or write to{" "}
            <a href={mailto} className="underline hover:text-kenjige-brown">{CONTACT_EMAIL}</a>
          </p>
        </form>
      )}
    </div>
  );
}
