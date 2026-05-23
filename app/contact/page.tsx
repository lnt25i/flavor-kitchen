import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AnimateInView from "@/components/anime/AnimateInView";
import PageHeaderReveal from "@/components/animations/PageHeaderReveal";
import { contact, site } from "@/lib/data";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <PageHeaderReveal
        title="Contact"
        description="Catering, events, or press — we're here."
      />

      <section className="section-dark section-spacious section-premium-edge">
        <div className="container-narrow grid gap-16 lg:grid-cols-5">
          <AnimateInView preset="fadeUp" className="lg:col-span-3">
            <ContactForm />
          </AnimateInView>

          <AnimateInView preset="slideRight" className="lg:col-span-2">
            <div className="card-premium p-8">
              <p className="text-eyebrow">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block font-display text-xl text-cream hover:text-orange"
              >
                {contact.email}
              </a>

              <p className="text-eyebrow mt-10">Social</p>
              <ul className="mt-4 space-y-3 text-body">
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
              <p className="text-body-muted mt-8">{contact.responseTime}</p>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
