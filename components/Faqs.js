"use client";

import { useMemo, useState } from "react";

const faqGroups = [
  {
    label: "About the Course",
    items: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer:
          "We offer leadership, product, data, AI, and business transformation programs tailored for enterprise teams.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "Popular tracks include AI/ML, analytics, product management, leadership, and digital transformation.",
      },
    ],
  },
  {
    label: "About the Delivery",
    items: [
      {
        question: "Are the programs live, self-paced, or hybrid?",
        answer:
          "We support live cohorts, self-paced learning, and blended delivery depending on team needs.",
      },
      {
        question: "Can delivery be customized by geography or time zone?",
        answer:
          "Yes. Programs can be scheduled and localized for distributed teams across regions.",
      },
    ],
  },
  {
    label: "Miscellaneous",
    items: [
      {
        question: "Do you provide reporting on learner progress?",
        answer:
          "Yes. We provide dashboards and progress reporting for engagement, completion, and outcomes.",
      },
      {
        question: "How quickly can a program be launched?",
        answer:
          "Timelines vary by scope, but most programs can be scoped and launched in a few weeks.",
      },
    ],
  },
];

export default function Faqs() {
  const [activeGroup, setActiveGroup] = useState(faqGroups[0].label);
  const [openIndex, setOpenIndex] = useState(0);

  const currentGroup = useMemo(
    () => faqGroups.find((group) => group.label === activeGroup) ?? faqGroups[0],
    [activeGroup]
  );

  return (
    <section id="faqs" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3rem]">
            Frequently Asked <span className="text-[#2673e8]">Questions</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="grid gap-7">
            {faqGroups.map((group) => {
              const isActive = group.label === activeGroup;
              return (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => {
                    setActiveGroup(group.label);
                    setOpenIndex(0);
                  }}
                  className={`rounded-lg border px-6 py-6 text-center text-xl font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[#cfe0ff] bg-white text-[#2673e8] shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
                      : "border-slate-200 bg-white text-slate-500 shadow-none hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <div className="space-y-8">
              {currentGroup.items.map((item, index) => {
                const expanded = openIndex === index;
                return (
                  <div key={item.question} className="border-b border-slate-200 pb-6">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(expanded ? -1 : index)}
                      className="flex w-full items-start justify-between gap-6 text-left"
                    >
                      <h3 className="max-w-4xl text-[1.15rem] font-semibold leading-[1.35] text-slate-950 sm:text-[1.35rem] lg:text-[1.45rem]">
                        {item.question}
                      </h3>
                      <span className="mt-1 text-3xl leading-none text-slate-400">{expanded ? "−" : "⌄"}</span>
                    </button>
                    {expanded && (
                      <p className="mt-4 max-w-4xl text-base leading-[1.7] text-slate-600 sm:text-lg">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-16 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[12px] bg-[#2673e8] px-7 py-3.5 text-[16px] font-medium text-white shadow-[0_6px_12px_rgba(38,115,232,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-[#1f63cf]"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}