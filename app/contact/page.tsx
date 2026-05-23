import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { contact } from "@/lib/data";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 text-cream">
        <div className="container-narrow px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Catering inquiries, press requests, or a simple hello — we&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-charcoal/60">{contact.responseTime}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2">
            <div className="rounded-2xl bg-charcoal p-8 text-cream">
              <h2 className="font-display text-xl font-semibold text-gold">
                Direct Contact
              </h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <p className="text-xs uppercase tracking-widest text-cream/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block font-medium transition-colors duration-300 hover:text-orange"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-widest text-cream/50">
                    Phone
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="mt-1 block font-medium transition-colors duration-300 hover:text-orange"
                  >
                    {contact.phone}
                  </a>
                </li>
              </ul>

              <h3 className="mt-10 text-xs font-semibold uppercase tracking-widest text-gold">
                Follow Along
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-orange"
                >
                  Instagram — @flavorkitchen
                </a>
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-orange"
                >
                  Facebook — Flavor Kitchen
                </a>
                <a
                  href={contact.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-orange"
                >
                  TikTok — @flavorkitchen
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
