import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AnimateInView from "@/components/anime/AnimateInView";
import { contact, site } from "@/lib/data";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <section className="section-dark border-b border-cream/10 pt-32 pb-16 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
            Contact
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-md">
            Catering, events, or press — we&apos;re here.
          </p>
        </div>
      </section>

      <section className="section-dark section-spacious">
        <div className="container-narrow grid gap-16 lg:grid-cols-5">
          <AnimateInView preset="fadeUp" className="lg:col-span-3">
            <ContactForm />
          </AnimateInView>

          <AnimateInView preset="slideRight" className="lg:col-span-2">
            <div className="rounded-2xl border border-cream/10 p-8 shadow-soft">
              <p className="text-eyebrow">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block font-display text-xl text-cream hover:text-orange"
              >
                {contact.email}
              </a>

              <p className="text-eyebrow mt-10">Social</p>
              <ul className="mt-4 space-y-3 text-sm text-cream/70">
                <li>
                  <a
                    href={contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange"
                  >
                    Instagram — {site.socialHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange"
                  >
                    TikTok — {site.socialHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange"
                  >
                    Facebook — {site.socialHandle}
                  </a>
                </li>
              </ul>
              <p className="text-lead mt-8 text-sm">{contact.responseTime}</p>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
