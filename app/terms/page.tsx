import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../site-config";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
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
            Terms &amp; Conditions
          </h1>

          <div className="prose-like space-y-6 text-ink/80 leading-relaxed">
            <p>
              These are placeholder terms for {site.businessName}. Replace
              this page with terms reviewed for your business before going
              live &mdash; a template is provided here only as a starting
              structure.
            </p>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                1. Quotes &amp; Pricing
              </h2>
              <p>
                Quotes provided by phone, form, or in person are estimates
                based on the information supplied. Final pricing may vary
                once the vehicle is inspected, and any change will be
                communicated before work proceeds.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                2. Call-Out Service
              </h2>
              <p>
                Call-outs are provided within the advertised service area.
                Access to the vehicle must be safe and legal; {site.businessName} reserves
                the right to decline a job on safety grounds.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                3. Payment
              </h2>
              <p>
                Payment is due on completion of work unless otherwise agreed
                in writing. Accepted methods are listed on the site.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                4. Warranty
              </h2>
              <p>
                Parts and labour are covered under the applicable
                manufacturer or workshop warranty terms, details of which
                will be provided on your invoice.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                5. Liability
              </h2>
              <p>
                {site.businessName} carries public liability insurance for
                work carried out at a customer&rsquo;s property. Liability is
                limited to the extent permitted by law.
              </p>
            </section>

            <p className="text-sm text-ink/50">
              Last updated: replace with your launch date.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
