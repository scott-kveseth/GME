"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FAQ() {
  return (
    <div id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 flex gap-16 flex-col lg:flex-row">
        <div className="basis-1/3">
          <div className="text-gray text-[32px] font-semibold">
            Frequently Asked Questions
          </div>
          <div className="mt-4 mb-8">
            We curated couple of questions asked by most of the users when
            onboarding with us
          </div>
          <Link href="/contact">
            <button
              className={`rounded-md border-glen border bg-glen text-white py-2 px-4 tracking-wider font-semibold`}
            >
              Get Started
            </button>
          </Link>
        </div>
        <div className="basis-2/3 flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div
                  className={`border-2 transition-all rounded-md ${
                    open ? "border-primary" : "border-gray-300"
                  }`}
                >
                  <Disclosure.Button className="flex w-full justify-between px-4 py-4 text-left font-medium focus:outline-none">
                    <span className={`${open ? "text-gray" : "text-gray-400"}`}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-400">
                    {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.`}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
