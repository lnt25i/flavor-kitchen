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
    staggerFadeUp(
      Array.from(form.querySelectorAll("[data-field]")) as Element[],
      90
    );
  }, []);

  useEffect(() => {
    if (submitted && successRef.current) successPop(successRef.current);
  }, [submitted]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="rounded-2xl border border-cream/10 p-10 text-center opacity-0 shadow-soft"
      >
        <p className="font-display text-2xl text-cream">Thank you</p>
        <p className="text-lead mt-4">We&apos;ll reply soon at info@flavorkitchen.us.</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-full border border-cream/15 bg-rich-black px-5 py-3.5 text-cream placeholder:text-cream/30 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div data-field className="opacity-0">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Name"
          className={fieldClass}
        />
      </div>
      <div data-field className="opacity-0">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className={fieldClass}
        />
      </div>
      <div data-field className="opacity-0">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          className={fieldClass}
        />
      </div>
      <div data-field className="opacity-0">
        <select
          id="subject"
          name="subject"
          required
          defaultValue="General Inquiry"
          className={fieldClass}
        >
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-rich-black">
              {s}
            </option>
          ))}
        </select>
      </div>
      <div data-field className="opacity-0">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Message"
          className={`${fieldClass} !rounded-3xl`}
        />
      </div>
      <button type="submit" data-field className="btn-primary w-full opacity-0 sm:w-auto">
        Send
      </button>
    </form>
  );
}
