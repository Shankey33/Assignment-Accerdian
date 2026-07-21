"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { IconStar } from "./Icons";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    let isMounted = true;

    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const json = await res.json();
        if (isMounted && json.success) {
          setTestimonials(json.data);
          setStatus("success");
        } else if (isMounted) {
          setStatus("error");
        }
      } catch (err) {
        if (isMounted) setStatus("error");
      }
    }

    loadTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="testimonials" className="bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Trusted by L&D Leaders and CHROs"
          description="Hear from the organizations that transformed their teams with Accredian Enterprise."
        />

        {status === "loading" && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-56 animate-pulse rounded-2xl border border-slate-700 bg-slate-800"
              />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="mt-14 text-center text-slate-400">
            Couldn&apos;t load testimonials right now. Please refresh the page.
          </p>
        )}

        {status === "success" && (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800/60 p-7"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-slate-700 pt-4">
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
