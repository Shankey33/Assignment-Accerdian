"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";
import { IconMenu, IconClose } from "./Icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
          onClick={(e) => handleNavClick(e, "#top")}
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
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative pb-1 text-[17px] font-medium transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#2673e8] after:transition-transform after:duration-200 hover:text-[#2673e8] hover:after:scale-x-100 ${
                activeHref === item.href ? "text-[#2673e8] after:scale-x-100" : "text-slate-900"
              }`}
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
              onClick={(e) => handleNavClick(e, item.href)}
              className={`rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-slate-50 hover:text-[#2673e8] ${
                activeHref === item.href ? "text-[#2673e8]" : "text-slate-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
