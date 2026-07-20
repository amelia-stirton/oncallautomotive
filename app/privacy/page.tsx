import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../site-config";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
          <Link
            href="/"
            className="font-mono text-sm text-signal hover:underline focus-ring rounded"
          >
            &larr; Back home
          </Link>

          <h1 className="font-display uppercase font-semibold text-4xl mt-6 mb-8">
            Privacy Policy
          </h1>

          <div className="prose-like space-y-6 text-ink/80 leading-relaxed">
            <p>
              {site.businessName} collects personal information you provide
              when contacting us or booking a service, such as your name,
              phone number, email address, location and vehicle details.
            </p>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                How we use your information
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to enquiries and provide quotes</li>
                <li>To carry out and invoice services</li>
                <li>To contact you about your vehicle or booking</li>
                <li>
                  To keep records required by law, including repair and
                  parts records under NSW motor repairer regulations
                </li>
              </ul>
            </section>

            <section>
              <p>
                We do not sell or share your personal information with third
                parties for marketing purposes. Information may be stored in
                our accounting and business software for record-keeping
                purposes.
              </p>
              <p>
                If you would like to access or correct the information we
                hold about you, contact us directly.
              </p>
            </section>

            <p className="text-sm text-ink/50">
              Last updated: July 2026. Read our{" "}
              <Link href="/terms" className="underline text-signal">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}