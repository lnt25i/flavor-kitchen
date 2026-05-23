"use client";

import { useState, type FormEvent } from "react";

const subjects = [
  "General",
  "Catering",
  "Event Booking",
  "Press",
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/40 bg-cream p-8 text-center shadow-sm">
        <p className="font-display text-2xl text-charcoal">Thank you!</p>
        <p className="mt-3 text-charcoal/80">
          Your message has been received. Chef Raben&apos;s team will get back
          to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 transition-colors duration-300 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 transition-colors duration-300 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 transition-colors duration-300 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="(555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 transition-colors duration-300 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            defaultValue="General"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-charcoal/20 bg-white px-4 py-3 transition-colors duration-300 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          placeholder="Tell us about your event, question, or how we can help..."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
