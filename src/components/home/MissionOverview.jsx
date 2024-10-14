/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Welcome from "@/assets/images/landing.png";
import { useEffect, useState } from "react";
import { useRequestDemo } from "@/contexts/RequestDemoContext";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function MissionOverview() {
  const [pValue, setPValue] = useState(0);
  const { requestDemo } = useRequestDemo();

  const evaluatePValue = () => {
    const screenSize = document.body.clientWidth;
    const p = (screenSize - 1280) / 2;
    setPValue(p > 24 ? p : 24);
  };

  useEffect(() => {
    window.addEventListener("resize", evaluatePValue);

    evaluatePValue();

    return () => window.removeEventListener("resize", evaluatePValue);
  }, []);

  return pValue ? (
    <div className="relative pt-32 pb-24 overflow-hidden">
      <div className="z-10 relative px-4 flex max-w-7xl mx-auto gap-12 items-center">
        <div className={`lg:basis-1/2 text-gray pr-[24px] transition-all`}>
          <div className="text-[32px] md:text-[48px] font-semibold">
            <p>Making A More</p>{" "}
            <p>
              <span className="text-secondary">Equitable</span> Residency
            </p>{" "}
            <p>Selection Process</p>
          </div>
          <div className="text-gray-400 mt-12 max-w-xl flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <CheckIcon className="w-5 h-5 text-secondary" />
              </div>
              <div>{"Reduces costs to applicants by >95%"}</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckIcon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                {
                  "Completely customizable platform with intuitive user interface"
                }
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CheckIcon className="w-5 h-5 text-secondary" />
              </div>
              <div>{"Cuts review time by 80%"}</div>
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={requestDemo}
              className={`rounded-md border-glen border bg-glen text-white py-3 px-6 tracking-wider font-semibold`}
            >
              Request a Demo
            </button>
            <Link href="/contact">
              <button
                className={`w-full sm:w-auto rounded-md border-glen border text-glen bg-white py-3 px-6 tracking-wider font-semibold`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden overflow-hidden xl:block">
          <img
            src={Welcome.src}
            alt=""
            style={{ width: "760px", top: 0 }}
            className="home-responsive-img hidden lg:block lg:absolute w-[100%] rounded-3xl border-4 border-[#363636]"
          />
        </div>
      </div>
      <div className="absolute z-0 top-0 left-0 right-0 bottom-0 flex ">
        <div className="basis-full xl:basis-2/3 h-full bg-light-yellow"></div>
        <div className="hidden xl:block basis-1/3 h-full bg-[#8CC5C2]">
          <div className="h-1/2 flex">
            <div className="basis-1/2 h-full" />
            <div
              className="basis-1/2 h-full"
              style={{
                background:
                  "linear-gradient(180deg, #78B3B0 65.48%, #8CC5C2 100%)",
              }}
            />
          </div>
          <div className="h-1/2 flex">
            <div
              className="basis-1/2 h-full"
              style={{
                background:
                  "linear-gradient(180deg, #8CC5C2 65.48%, #78B3B0 100%)",
              }}
            />
            <div className="basis-1/2 h-full" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
