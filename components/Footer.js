export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "Facebook", href: "#", icon: FacebookIcon },
    { label: "LinkedIn", href: "#", icon: LinkedInIcon },
    { label: "X", href: "#", icon: XIcon },
    { label: "Instagram", href: "#", icon: InstagramIcon },
    { label: "YouTube", href: "#", icon: YouTubeIcon },
  ];

  return (
    <footer className="bg-white text-slate-950">
      <div className="mx-auto max-w-[1440px] px-8 py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-8">
            <a href="#top" className="inline-flex flex-col leading-none">
              <span className="text-[36px] font-extrabold tracking-[-0.06em] text-[#2673e8] sm:text-[40px]">
                accredian
              </span>
              <span className="mt-[-4px] text-[10px] font-medium tracking-[0.34em] text-slate-600 uppercase">
                credentials that matter
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-5 text-slate-700">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="transition-colors hover:text-[#2673e8]"
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
            <a
              href="#contact"
              className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-[#2673e8] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#1f63cc]"
            >
              Enquire Now
            </a>
            <p className="text-sm font-medium text-slate-900">Speak with our Advisor</p>
          </div>
        </div>

        <div className="mt-9 border-t border-slate-400 pt-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-black">
                Accredian
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-900">
                <li>
                  <a href="#about" className="transition-colors hover:text-[#2673e8]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="transition-colors hover:text-[#2673e8]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#why-accredian" className="transition-colors hover:text-[#2673e8]">
                    Why Accredian
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-black">
                Contact Us
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-900">
                <p>
                  Email us:{" "}
                  <a
                    href="mailto:enterprise@accredian.com"
                    className="font-medium text-[#1d4ed8] transition-colors hover:text-[#1e40af]"
                  >
                    enterprise@accredian.com
                  </a>
                </p>
                <p>
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                  Gurugram, Haryana
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-400 pt-5 text-center">
          <p className="text-xs text-slate-950 sm:text-sm">
            © {year} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5V7c0-.8.5-1 1-1h2V3h-3.4C10.8 3 10 5.2 10 7.6V8.5H7V12h3v9h4v-9h3l.5-3.5H14Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 6.5A2.25 2.25 0 1 1 6.5 2a2.25 2.25 0 0 1 0 4.5ZM4.7 21h3.6V8.2H4.7V21Zm6.1 0h3.6v-6.8c0-1.8.6-3 2.3-3 1.5 0 2 1.1 2 2.9V21h3.6v-7.6c0-3.8-2-5.6-4.6-5.6-2 0-3 1.1-3.5 1.9V8.2h-3.4V21Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.3 2H21l-6.9 7.9L22 22h-6.8l-5.3-6.9L3.8 22H1l7.5-8.6L2 2h6.9l4.8 6.3L18.3 2Zm-1.2 18h1.5L8 3.9H6.3L17.1 20Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.5a3 3 0 0 0-2.1-2.1C17.7 5 12 5 12 5s-5.7 0-7.5.4A3 3 0 0 0 2.4 7.5 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.5 3 3 0 0 0 2.1 2.1c1.8.4 7.5.4 7.5.4s5.7 0 7.5-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.5ZM9.6 15.3V8.7L15.2 12l-5.6 3.3Z" />
    </svg>
  );
}
