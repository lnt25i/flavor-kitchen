"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { staggerFadeUp, successPop } from "@/lib/anime/presets";

const subjects = [
  "General Inquiry",
  "Catering Request",
  "Event Booking",
  "Press & Media",
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const fields = form.querySelectorAll("[data-field]");
    staggerFadeUp(Array.from(fields) as Element[], 90);
  }, []);

  useEffect(() => {
    if (submitted && successRef.current) {
      successPop(successRef.current);
    }
  }, [submitted]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="rounded-2xl border border-gold/40 bg-cream p-8 text-center opacity-0 shadow-sm"
      >
        <p className="font-display text-2xl text-charcoal">Thank you!</p>
        <p className="mt-3 text-charcoal/80">
          Your message has been received. Chef Raben&apos;s team will get back
          to you at info@flavorkitchen.us soon.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div data-field className="opacity-0">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="Your name"
          />
        </div>
        <div data-field className="opacity-0">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div data-field className="opacity-0">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="(555) 000-0000"
          />
        </div>
        <div data-field className="opacity-0">
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            defaultValue="General Inquiry"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div data-field className="opacity-0">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-charcoal/20 bg-white px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          placeholder="Tell us about your Palm Beach County event, catering needs, or question..."
        />
      </div>

      <button type="submit" data-field className="btn-primary w-full opacity-0 sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
