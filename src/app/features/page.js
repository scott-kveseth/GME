/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";
import ContactUs from "@/components/shared/ContactUsButton";
import Application1 from "@/assets/images/features/application-1.png";
import Application2 from "@/assets/images/features/application-2.png";
import Application3 from "@/assets/images/features/application-3.png";
import Application4 from "@/assets/images/features/application-4.png";
import Application5 from "@/assets/images/features/application-5.png";
import Groups1 from "@/assets/images/features/groups-1.png";
import Groups2 from "@/assets/images/features/groups-2.png";
import Groups3 from "@/assets/images/features/groups-3.png";
import Interview1 from "@/assets/images/features/interview-1.png";
import Interview2 from "@/assets/images/features/interview-2.png";
import Interview3 from "@/assets/images/features/interview-3.png";
import Review1 from "@/assets/images/features/review-1.png";
import Review2 from "@/assets/images/features/review-2.png";
import Review3 from "@/assets/images/features/review-3.png";
import Review4 from "@/assets/images/features/review-4.png";
import Header from "@/assets/images/features/header.png";
import AppMisc from "@/assets/images/features/app-misc.png";
import AppMisc1 from "@/assets/images/features/app-misc1.png";
import AppMisc2 from "@/assets/images/features/app-misc2.png";
import GroupMisc1 from "@/assets/images/features/group-misc1.png";
import GroupMisc2 from "@/assets/images/features/group-misc2.png";
import GroupMisc3 from "@/assets/images/features/group-misc3.png";
import GroupMisc4 from "@/assets/images/features/group-misc4.png";
import VerifiedUsers from "@/assets/images/features/Verified Users.svg";
import Link from "next/link";
import {
  ArrowRightIcon,
  CurrencyDollarIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import PageHeader from "@/components/shared/PageHeader";
import { useState } from "react";
import { useRequestDemo } from "@/contexts/RequestDemoContext";

const features = [
  {
    title: "Completely Customizable Application",
    text: (
      <div>
        Residency is not one-size-fits-all, and the residency application
        shouldn’t be either! Our platform allows for specialty-wide and
        program-specific customization, allowing you to find your perfect fit.
        <span className="font-semibold">
          {" "}
          As a specialty, you determine the content of your specific
          application, changing questions, requirements, and deadlines to meet
          your needs.
        </span>{" "}
        As a program, you can hide or display specific components of the
        application to your review team. You can also customize your own rubrics
        and review process to make it as efficient and specific as possible.
      </div>
    ),
    misc: (
      <div className="w-full relative translate-x-16">
        <img className="w-full" alt="" src={AppMisc.src} />
        <img
          className="absolute top-1/3 -left-[10%]"
          alt=""
          src={AppMisc1.src}
        />
        <img
          className="absolute bottom-[10%] right-[5%]"
          alt=""
          src={AppMisc2.src}
        />
      </div>
    ),
    images: [
      Application1,
      Application2,
      Application3,
      Application4,
      Application5,
    ],
  },
  {
    title: "Groups",
    text: (
      <div>
        Easily sort your applications into customized groups as you’re
        reviewing. These groups can be managed individually or shared with your
        review team and can be used for interview management!
      </div>
    ),
    misc: (
      <div className="w-full">
        <div className="flex items-end">
          <img src={GroupMisc1.src} alt="" className="basis-[40%]" />
          <img src={GroupMisc2.src} alt="" className="basis-full" />
        </div>
        <div className="flex">
          <img src={GroupMisc4.src} alt="" className="basis-1/2" />
          <img src={GroupMisc3.src} alt="" className="basis-1/2" />
        </div>
      </div>
    ),
    images: [Groups1, Groups2, Groups3],
  },
  {
    title: "Integrated Scheduling Platform",
    text: "Customize your interview day and invite applicants directly from the Central App! Our platform allows for easy and intuitive interview scheduling, and creates a complete itinerary for both applicants and programs. Our integrated platform means you’ll never have to export applications again!",
    images: [Interview1, Interview2, Interview3],
  },
  {
    title: "Intuitive Reviewer Portals",
    text: (
      <div>
        Our reviewer portals were designed for and by residency application
        reviewers. Its sleek and intuitive design allows for maximum efficiency,
        and our customizable application review and rubrics lets you control the
        process.{" "}
        <div className="font-semibold mt-4">
          When combined with signaling, our condensed application format cuts
          review time by as much as 80%.
        </div>
      </div>
    ),
    images: [Review1, Review2, Review3, Review4],
  },
];

const additionalFeatures = [
  {
    title: "Verified Users and Enhanced Security",
    text: (
      <div>
        {
          "Unlike other residency application platforms, we’ve created a verified user database. All documents uploaded from verified accounts (letters of recommendation, medical school documents) will come with a seal of verification. Last year, we had >95% verified users for plastic surgery."
        }{" "}
        <div className="font-semibold mt-4">
          You can review with confidence knowing that these letters are coming
          from a secure source!
        </div>
      </div>
    ),
    icon: <img src={VerifiedUsers.src} width="100px" height="auto" alt="" />,
  },
  {
    title: "Quality over Quantity",
    text: "Our product was developed by program directors and chairs who have reviewed  thousands of applications.  Our output was carefully crafted to be easy-to-read, highlighting applicant attributes, while reducing review time by 80%.",
    icon: (
      <div
        className="p-4 rounded-3xl flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, #24C79B 0%, #4B999C 100%)",
        }}
      >
        <ScaleIcon className="w-10 h-10 text-white" />
      </div>
    ),
  },
  {
    title: "Cost",
    text: "We are committed to reducing costs to our users. Our platform will always be flat-fee based and affordable to applicants.",
    icon: (
      <div
        className="p-4 rounded-3xl flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, #24C79B 0%, #4B999C 100%)",
        }}
      >
        <CurrencyDollarIcon className="w-10 h-10 text-white" />
      </div>
    ),
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const { requestDemo } = useRequestDemo();

  return (
    <div>
      <PageHeader>
        <div className="pt-48 md:pt-24 relative pb-12 md:pb-0">
          <div className="px-4 md:px-12 xl:px-4 max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center z-10 relative text-center">
            <h1 className="font-semibold text-[32px] md:text-[64px] mb-8 text-secondary">
              Features
            </h1>
            <div className="max-w-4xl md:text-[20px] leading-8">
              Our platform reduces costs to applicants while providing a
              completely customizable platform with an intuitive user interface,
              cutting your review time by 80%
            </div>
            <div className="mt-8 flex gap-4 flex-col md:flex-row">
              <button
                onClick={() => requestDemo()}
                className={`w-full md:w-auto rounded-md text-[18px] border-glen border bg-glen text-white py-3 px-6 tracking-wider font-medium`}
              >
                Request a Demo
              </button>
              <Link href="/contact">
                <button
                  className={`w-full md:w-auto rounded-md text-[18px] border-glen border text-glen bg-white py-3 px-6 tracking-wider font-medium`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
            <img
              className="hidden md:block mt-12"
              src={Header.src}
              alt=""
              width="100%"
            />
          </div>
        </div>
      </PageHeader>
      <div
        className="md:pt-16 pb-12"
        style={{
          backgroundImage: "linear-gradient(to top, #249690, #f3efe5, #F4F4F4)",
        }}
      >
        {features.map((f, index) => (
          <div key={f.title} className={`gap-0 py-20`}>
            <div className="mx-auto px-4 max-w-[1640px] flex gap-24 flex-col lg:flex-row">
              <div
                className={`text-black basis-1/2 ${
                  index % 2 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="text-primary font-semibold text-[24px] md:text-[36px] tracking-widest mt-6 mb-6 flex gap-4">
                  <span className={`${index === 3 ? "text-white" : ""}`}>
                    {f.title}
                  </span>
                  {f.title === "Verified Users and Enhanced Security" && (
                    <img
                      src={VerifiedUsers.src}
                      width="100px"
                      height="auto"
                      alt=""
                    />
                  )}
                </div>
                <div
                  className={`max-w-3xl text-[18px] ${
                    index === 3 ? "text-white" : ""
                  }`}
                >
                  {f.text}
                </div>
                <div
                  className={`mt-8 ${
                    index === 3 ? "text-white" : "text-secondary"
                  } flex`}
                >
                  <Link
                    href="/contact"
                    className="underline underline-offset-8 flex gap-2 font-semibold  "
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 mt-1" />
                  </Link>
                </div>
              </div>
              {f.images && (
                <div
                  className={`basis-1/2 ${index % 2 ? "order-1" : "order-2"}`}
                >
                  <div className="max-w-[780px] features-slide">
                    <Slider autoplay arrows={false} slidesToShow={1} fade dots>
                      {f.misc ? f.misc : null}
                      {f.images.map((img, index) => (
                        <div key={index}>
                          <img
                            className="rounded-xl"
                            src={img.src}
                            alt=""
                            width="100%"
                            height="100%"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-neutrals py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex gap-24 flex-col lg:flex-row">
            <div className="basis-1/2 flex flex-wrap">
              {additionalFeatures.map((f, index) => (
                <div key={f.title} className={`basis-full sm:basis-1/2 p-3`}>
                  <AdditionFeatureItem
                    f={f}
                    index={index}
                    selected={selectedFeature === index}
                    onSelect={() => setSelectedFeature(index)}
                  />
                </div>
              ))}
            </div>
            <div className="basis-1/2 mb-12 mt-12 px-4">
              <div className="font-semibold text-purple text-[24px] md:text-[48px]">
                Features That <br />
                Make Us Stand Out
              </div>
              <div>
                <div className="border-2 border-glen my-12 w-[200px]" />
                <div className="text-[32px] font-medium text-primary">
                  {additionalFeatures[selectedFeature].title}
                </div>
                <div className="text-gray mt-8 text-[18px]">
                  {additionalFeatures[selectedFeature].text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-yellow border-t">
        <div className="py-16 md:py-32 px-4 flex flex-col max-w-7xl mx-auto justify-center items-center">
          <div className="text-[24px] md:text-[36px] lg:text-[64px] font-semibold text-center mb-6 md:mb-12">
            <div>Get Started With</div>
            <div>
              <span className="text-primary">Central Application</span> Today
            </div>
          </div>
          <div>
            <ContactUs bg="glen" color="white" link="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

const AdditionFeatureItem = ({ f, index, selected, onSelect }) => (
  <div
    key={f.title}
    className={`text-black rounded-3xl relative shadow-md border-4 cursor-pointer transition-all ${
      index === 2 ? "pb-[50%] sm:pb-[100%]" : "pb-[50%] sm:pb-[100%]"
    } hover:scale-[110%] ${
      index === 0 || index === 2
        ? "hover:translate-x-[-5%]"
        : "hover:translate-x-[5%]"
    } ${
      index === 0 || index === 1
        ? "hover:translate-y-[-5%]"
        : "hover:translate-y-[5%]"
    } ${
      selected
        ? "bg-[#262626] text-white border-[#31D176]"
        : "bg-white border-transparent"
    }`}
    onClick={() => onSelect(index)}
  >
    <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col items-start justify-between p-8">
      <div className="flex">{f.icon}</div>
      <div className="font-semibold max-w-[240px] md:text-[20px] tracking-widest flex gap-4">
        <span>{f.title}</span>
      </div>
    </div>
  </div>
);
