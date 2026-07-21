import Image from "next/image";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="bg-white px-4 pb-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <div className="mx-auto max-w-[1180px] rounded-[24px] bg-[#eaf2ff] px-5 py-8 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-[3.6rem]">
              <span className="block">Next-Gen <span className="text-[#2673e8]">Expertise</span></span>
              <span className="block">For Your <span className="text-[#2673e8]">Enterprise</span></span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-normal leading-[1.35] text-slate-950 sm:text-xl lg:text-[1.35rem]">
              Cultivate high-performance
              <br />
              teams through expert learning.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-slate-950 sm:text-[15px]">
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1ea64b] text-[#1ea64b]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m5 12 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center justify-center rounded-[12px] bg-[#2673e8] px-6 py-2.5 text-[16px] font-medium text-white shadow-[0_6px_12px_rgba(38,115,232,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-[#1f63cf]"
            >
              Enquire Now
            </a>
          </div>

          <div className="relative min-h-[320px] self-stretch overflow-hidden lg:min-h-[460px]">
            <Image
              src="/corporate-big-hero-v4.webp"
              alt="Corporate professionals"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-bottom lg:object-right"
            />
          </div>
        </div>
      </div>

      <section id="stats" className="mx-auto max-w-[960px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
            Our <span className="text-[#2673e8]">Track Record</span>
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:text-lg">
            The Numbers Behind <span className="text-[#2673e8]">Our Success</span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {hero.stats.map((stat) => (
            <div key={stat.value} className="px-2 text-center lg:px-6">
              <div className="mx-auto flex h-14 w-24 items-center justify-center rounded-full bg-[#d9e7fb] text-2xl font-semibold tracking-[-0.04em] text-[#2673e8] sm:h-16 sm:w-28">
                {stat.value}
              </div>
              <p className="mx-auto mt-5 max-w-[12rem] text-sm leading-[1.35] text-slate-950 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
