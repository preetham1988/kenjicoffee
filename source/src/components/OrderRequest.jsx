import React, { useId, useState } from 'react';
import { SHEETS_WEBHOOK_URL, CONTACT_EMAIL } from '../config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function contactType(value) {
  if (EMAIL_RE.test(value)) return "email";
  const digits = value.replace(/[\s().-]/g, "");
  if (/^\+?\d{7,15}$/.test(digits)) return "phone";
  return null;
}

export default function OrderRequest({ product }) {
  const inputId = useId();
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
        <p className="text-[17px] font-medium">{product.price}</p>
        <p className="mt-3 text-[15px] text-leaf max-w-xs mx-auto" role="status">
          {status === "sent"
            ? "Thank you. We'll be in touch shortly to confirm your order."
            : <>Your email app should open with your request. Just press send, or write to <a href={mailto} className="underline underline-offset-2">{CONTACT_EMAIL}</a>.</>}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <p className="text-[17px] font-medium">{product.price}</p>
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full bg-leaf text-white px-5 py-2 text-[14px] font-medium hover:bg-leaf/90 transition-colors"
          >
            Order
          </button>
        )}
      </div>
      {open && (
        <form onSubmit={handleSubmit} className="max-w-xs mx-auto text-left mt-5" noValidate>
          <label htmlFor={inputId} className="block text-[13px] text-muted mb-2 text-center">
            Leave your phone number or email and we'll be in touch.
          </label>
          <div className="flex items-center rounded-full bg-paper border border-line focus-within:border-leaf focus-within:ring-4 focus-within:ring-leaf/10 transition">
            <input
              id={inputId}
              type="text"
              autoComplete="email"
              autoFocus
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Phone or email"
              className="min-w-0 flex-1 bg-transparent pl-5 pr-2 py-2.5 text-[15px] focus:outline-none placeholder-muted/70"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              aria-label="Send"
              className="m-1 rounded-full bg-ink text-white px-4 py-1.5 text-[13px] font-medium hover:bg-ink/85 transition-colors disabled:opacity-60"
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
          {error && <p className="text-[13px] text-red-700 mt-2 text-center">{error}</p>}
          {status === "error" && (
            <p className="text-[13px] text-red-700 mt-2 text-center">Something went wrong. Please email us instead.</p>
          )}
          <p className="text-[13px] text-muted mt-3 text-center">
            Or write to{" "}
            <a href={mailto} className="text-leaf hover:underline underline-offset-2">{CONTACT_EMAIL}</a>
          </p>
        </form>
      )}
    </div>
  );
}
