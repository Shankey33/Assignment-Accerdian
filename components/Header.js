"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";
import { IconMenu, IconClose } from "./Icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(15,23,42,0.04)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 lg:px-12">
        <a
          href="#top"
          onClick={() => handleNavClick("#top")}
          className="flex flex-col leading-none"
        >
          <span className="text-[30px] font-extrabold leading-none tracking-[-0.04em] text-[#2673e8]">
            accredian
          </span>
          <span className="mt-[-2px] text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">
            credentials that matter
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-[17px] font-medium text-slate-900 transition-colors hover:text-[#2673e8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden"
        >
          {isOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-5 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2673e8]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
