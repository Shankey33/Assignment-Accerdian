export default function Testimonials() {
  const testimonials = [
    {
      logo: "ADP",
      logoClassName: "text-[#e12d20]",
      quote:
        "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "BAYER",
      logoClassName: "text-[#163d5e]",
      quote:
        "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3rem]">
            Testimonials from <span className="text-[#2673e8]">Our Partners</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 sm:text-xl">
            What <span className="text-[#2673e8]">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-2 lg:gap-2">
          {testimonials.map((item) => (
            <article
              key={item.logo}
              className="min-h-[320px] rounded-[18px] border border-[#d5dbea] bg-white px-8 py-8 shadow-[0_0_0_1px_rgba(15,23,42,0.02)] sm:px-10 sm:py-10 lg:min-h-[330px]"
            >
              <div className="flex h-full flex-col justify-start">
                <div className={`text-[2.6rem] font-extrabold leading-none tracking-[-0.07em] ${item.logoClassName}`}>
                  {item.logo}
                </div>

                <p className="mt-12 max-w-[38rem] text-[1.04rem] leading-[1.55] text-slate-700 sm:text-[1.08rem] lg:text-[1.12rem]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#1f71e9]" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}