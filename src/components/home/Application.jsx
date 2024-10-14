/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

import Application1 from "@/assets/images/application/Central App Sample Application-1.png";
import Application2 from "@/assets/images/application/Central App Sample Application-2.png";
import Application3 from "@/assets/images/application/Central App Sample Application-3.png";
import Application4 from "@/assets/images/application/Central App Sample Application-4.png";

const applicationImages = [
  Application1,
  Application2,
  Application3,
  Application4,
];

export default function Application() {
  return (
    <div className="relative application-container">
      <div
        id="application-content"
        className="application-scroller bg-white relative h-[500px] overflow-auto border-2 shadow-md rounded"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="application-wrapper">
          {applicationImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-8 shadow-xl bg-primary text-white rounded-full px-5 py-3 tracking-widest flex items-center gap-2 transition-all"
        style={{ left: "calc(50% - 40px)" }}
      >
        Scroll <ArrowDownIcon className="mb-1" width={16} />
      </button>
    </div>
  );
}
