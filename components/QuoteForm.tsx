"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/app/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

   const form = e.currentTarget;

const formData = new FormData(form);

const data = Object.fromEntries(formData.entries());

try {
  const res = await fetch("/api/quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="quote" className="bg-paper-dim">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-24 text-center">
          <p className="font-mono text-hazard text-sm uppercase tracking-widest mb-3">
            Ticket lodged
          </p>
          <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl mb-4">
            Got it &mdash; we&rsquo;ll be in touch shortly
          </h2>
          <p className="text-ink/70">
            Need it sorted faster? Call us directly on{" "}
            <a href={site.phoneHref} className="underline font-medium">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-paper-dim">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-24">
       
        <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl mb-2">
          Enquire Now
        </h2>
        <p className="text-ink/70 mb-8">
          Need a service, repair or inspection? Tell us a little about your vehicle and we'll get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-paper border-2 border-ink rounded-md p-6 sm:p-8 space-y-5"
        >
          <Field label="Name" name="name" required autoComplete="name" />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <Field label="Suburb / location" name="location" required />
          <Field
            label="Vehicle (make, model, year)"
            name="vehicle"
            required
          />

           <Field label="Kilometres (if you're unsure, leave this out)" name="kilometres" required />

           <Field label="Registration number" name="registration" required />
          <div>
            <label
              htmlFor="details"
              className="block font-mono text-xs uppercase tracking-widest text-ash mb-1"
            >
              How can we help?
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={4}
              className="w-full border-2 border-ink/30 rounded-sm px-3 py-2 bg-paper focus:border-hazard focus-ring resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-signal text-paper font-display uppercase tracking-wide font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending\u2026" : "Send Request"}
          </button>

          {status === "error" && (
            <p className="text-signal text-sm">
              Something went wrong sending that. Please call{" "}
              <a href={site.phoneHref} className="underline">
                {site.phoneDisplay}
              </a>{" "}
              instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-xs uppercase tracking-widest text-ash mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border-2 border-ink/30 rounded-sm px-3 py-2 bg-paper focus:border-hazard focus-ring"
      />
    </div>
  );
}
