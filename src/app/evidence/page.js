"use client";

import Link from "next/link";
import { useState } from "react";
import EvidenceTab from "@/components/evidence/EvidenceTab";
import PilotsTab from "@/components/evidence/PilotsTab";
import TestimonialsTab from "@/components/evidence/TestimonialsTab";
import PageHeader from "@/components/shared/PageHeader";
import { useRequestDemo } from "@/contexts/RequestDemoContext";

const TABS = [
  {
    title: "Pilots",
    component: <PilotsTab />,
  },
  {
    title: "Evidence",
    component: <EvidenceTab />,
  },
  {
    title: "Testimonials",
    component: <TestimonialsTab />,
  },
];

export default function Evidence() {
  const [tab, setTab] = useState(TABS[0]);
  const { requestDemo } = useRequestDemo();

  return (
    <div className="scroll-smooth">
      <PageHeader>
        <div className="pt-48 px-4 md:px-12 xl:px-4 max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center z-10 relative text-center">
          <h1 className="font-bold text-[36px] md:text-[64px] text-secondary mb-2 md:mb-3">
            Evidence
          </h1>
          <div className="max-w-6xl text-[24px] md:text-[32px] font-medium">
            CentralApp has demonstrated user preference for both programs and
            applicants in published, peer-reviewed literature.
          </div>
          <div className="mt-8 flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <button
              onClick={() => requestDemo()}
              className={`rounded-md w-full sm:w-auto text-[18px] border-glen border bg-glen text-white py-3 px-6 tracking-wider font-medium`}
            >
              Request a Demo
            </button>
            <Link href="/contact">
              <button
                className={`rounded-md w-full sm:w-auto text-[18px] border-glen border text-glen bg-white py-3 px-6 tracking-wider font-medium`}
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="mt-36 self-stretch md:self-auto">
            <div className="flex flex-col md:flex-row md:rounded-t-xl border overflow-x-hidden border-b-0 w-full md:w-auto">
              {TABS.map((t, index) => (
                <a
                  onClick={() => setTab(t)}
                  href={`#${t.title.toLowerCase()}`}
                  key={t.title}
                  className={`cursor-pointer md:w-[230px] py-6 font-semibold leading-5 rounded-sm uppercase focus:outline-none
                          ${
                            t.title === tab.title
                              ? "bg-secondary text-white shadow"
                              : "text-secondary hover:text-primary"
                          } ${index > 0 ? "border-l" : ""}`}
                >
                  {t.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageHeader>
      <div className="border-t bg-white">
        <PilotsTab />
      </div>
    </div>
  );
}
