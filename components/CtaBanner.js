import { IconArrowRight } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 px-8 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Upskill Your Workforce?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-indigo-100">
            Join 97+ enterprises building future-ready teams with Accredian Enterprise.
          </p>
          <a
            href="#contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 transition-transform hover:scale-105"
          >
            Talk to an Expert
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
