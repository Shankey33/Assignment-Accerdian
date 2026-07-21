export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-7 w-7">
          <path d="M4 19h16" strokeLinecap="round" />
          <path d="M6 15v4M10 11v8M14 7v12M18 3v16" strokeLinecap="round" />
          <path d="m6 11 4-4 3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-7 w-7">
          <path d="M5 5h14v8H5z" strokeLinejoin="round" />
          <path d="M12 13v6" strokeLinecap="round" />
          <path d="m9 19 3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-7 w-7">
          <path d="M4 6.5h16v10H4z" strokeLinejoin="round" />
          <path d="M9 19h6" strokeLinecap="round" />
          <path d="M12 9v4" strokeLinecap="round" />
          <path d="m10.5 10.5 1.5-1.5 1.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-[2.4rem]">
            How We <span className="text-[#2673e8]">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:text-lg">
            A Structured Three-Step Approach to <span className="text-[#2673e8]">Skill Development</span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative min-h-[230px] rounded-3xl border border-[#9cc5ff] bg-[#edf4ff] px-6 py-6 shadow-[0_10px_22px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1f71e9] bg-white text-[0.8rem] font-bold text-slate-950 shadow-sm">
                {step.number}
              </div>

              <div className="absolute left-0 top-1/2 hidden h-20 w-2 -translate-y-1/2 rounded-r-full bg-[#1f71e9] lg:block" />
              <div className="absolute right-0 top-1/2 hidden h-20 w-2 -translate-y-1/2 rounded-l-full bg-[#1f71e9] lg:block" />

              <div className="mt-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1f71e9] text-white shadow-[0_12px_24px_rgba(31,113,233,0.28)]">
                  {step.icon}
                </div>
              </div>

              <div className="mt-7 text-center">
                <h3 className="text-[1.1rem] font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[1.2rem]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[17rem] text-[0.85rem] leading-[1.4] text-slate-700 sm:text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
