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

          <h1 className="font-display uppercase font-semibold text-4xl mt-6 mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-ink/60 text-sm mb-8">
            {site.businessName} &mdash; Mobile Mechanic, Hurstville NSW.
            Licensed Motor Vehicle Repairer (MVRL #64070)
          </p>

          <div className="prose-like space-y-6 text-ink/80 leading-relaxed">
            <p>
              These terms apply to all services provided by{" "}
              {site.businessName}. By booking a service, you agree to these
              terms. Nothing in these terms limits your rights under the
              Australian Consumer Law.
            </p>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                1. Quotes and Pricing
              </h2>
              <p>
                All quotes are estimates based on the information you provide
                about your vehicle and the fault. The final price may change
                if inspection reveals additional faults or parts required. No
                extra work will be carried out without your approval. If
                additional work is identified, you will be given a quote and
                the work will only proceed once you agree.
              </p>
              <p>
                All prices displayed on this website include GST unless
                stated otherwise. After-hours and emergency call-outs may
                attract different rates, which will be confirmed with you
                before booking.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                2. Bookings and Cancellations
              </h2>
              <p>
                Bookings are confirmed by phone or text message. Please
                provide at least 2 hours&rsquo; notice if you need to cancel
                or reschedule. A call-out fee may apply for no-shows or
                cancellations made after the mechanic has commenced travel to
                your location.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                3. Payment
              </h2>
              <p>
                Payment is due on completion of work unless otherwise agreed
                in writing. We accept card, bank transfer, and cash. Parts
                fitted to your vehicle remain the property of{" "}
                {site.businessName} until payment is received in full.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                4. Warranty
              </h2>
              <p>
                Parts installed are covered under the manufacturer&rsquo;s
                warranty. Labour is warranted for defects arising from
                workmanship in the service carried out.
              </p>
              <p>
                This labour warranty does not cover faults caused by
                subsequent work performed by another party, or by items
                identified during the service but not actioned.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                5. Liability
              </h2>
              <p>
                Inspection and liability is limited to items listed on the
                invoice for each job. No liability is accepted for
                pre-existing faults or components not involved in the service
                carried out.
              </p>
              <p>
                Where safety-related items are identified but not actioned as
                part of a service, you will be advised, and any such items
                are deemed declined unless otherwise agreed in writing.
              </p>
              <p>
                To the extent permitted by law, liability arising from any
                service is capped at the value of the invoice for that
                service.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                6. Your Responsibilities
              </h2>
              <p>
                To carry out work safely and efficiently, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide safe and reasonable access to the vehicle</li>
                <li>
                  Ensure the vehicle is in a location suitable for the work
                  to be performed
                </li>
                <li>Provide accurate information about the vehicle and the fault</li>
              </ul>
              <p>
                We reserve the right to decline or stop work if the location
                or conditions are unsafe.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                7. Parts
              </h2>
              <p>
                New parts are fitted unless otherwise agreed. If you supply
                your own parts, they are fitted at your risk and no warranty
                is provided on the part itself, although the labour warranty
                still applies.
              </p>
              <p>
                Replaced parts are available for you to inspect or keep on
                request, in accordance with our obligations under the Motor
                Dealers and Repairers Act 2013 (NSW).
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                8. Website Content
              </h2>
              <p>
                Content on this website is general information only and does
                not constitute a quote or an offer. Services and prices may
                change without notice. While we take care to keep information
                accurate, we accept no liability for errors on this website
                or for the content of any third-party links.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase font-semibold text-xl text-ink mb-2">
                9. Australian Consumer Law
              </h2>
              <p>
                Our services come with guarantees that cannot be excluded
                under the Australian Consumer Law. Nothing in these terms
                excludes, restricts, or modifies any consumer guarantee,
                right, or remedy available to you under the Australian
                Consumer Law, and nothing above is intended to limit those
                rights.
              </p>
            </section>

            <p className="text-sm text-ink/50">
              Last updated: July 2026. Read our{" "}
              <Link href="/privacy" className="underline text-signal">
                Privacy Policy
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