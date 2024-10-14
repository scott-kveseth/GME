/* eslint-disable @next/next/no-img-element */
"use client";
import Image1 from "@/assets/images/support/1.png";
import Image2 from "@/assets/images/support/2.png";
import Image3 from "@/assets/images/support/3.png";
import Image4 from "@/assets/images/support/4.png";
import Image5 from "@/assets/images/support/5.png";
import Image6 from "@/assets/images/support/6.png";
import PageHeader from "@/components/shared/PageHeader";
import { useRequestDemo } from "@/contexts/RequestDemoContext";
import Link from "next/link";

export default function SupportAndSecurity() {
  const { requestDemo } = useRequestDemo();

  return (
    <div>
      <PageHeader>
        <div className="pt-48 pb-36 px-4 md:px-12 xl:px-4 max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center z-10 relative text-center">
          <h1 className="font-bold text-[36px] md:text-[64px] text-secondary mb-2 md:mb-3">
            Support & Security
          </h1>
          <div className="max-w-3xl text-[24px] md:text-[30px] font-medium">
            Providing you the most individualistic, real-time user support
          </div>
          <div className="mt-8 flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <button
              onClick={requestDemo}
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
        </div>
      </PageHeader>
      <div className="py-24 bg-white">
        <div className="text-center">
          <div className="uppercase font-semibold text-secondary">
            user support
          </div>
          <div className="text-gray font-medium text-[32px] max-w-2xl mx-auto">
            Supporting Your Journey Every Step Of The Way
          </div>
          <div className="text-gray-400 max-w-xl mx-auto mt-8">
            We are invested in making sure that all of our users have the best
            experience possible.
          </div>
        </div>
        <div className="max-w-7xl px-4 mx-auto">
          <div className="flex items-center  gap-8 lg:gap-16 mt-8 flex-col lg:flex-row">
            <div className="basis-full">
              <div className="font-bold text-[28px] text-secondary">
                Full Time User Support Staff Experienced In Residency
                Application Management
              </div>
              <div className="text-gray-400 mt-4">
                Our support team is composed of people with experience in
                customer service and residency management. Our background gives
                us a unique ability to provide thoughtful and educated answers
                to your questions.
              </div>
            </div>
            <div className="basis-full flex justify-end">
              <img src={Image1.src} alt="" />
            </div>
          </div>
          <div className="flex items-center  gap-8 lg:gap-16 flex-col lg:flex-row mt-16">
            <div className="basis-full flex order-2 lg:order-1">
              <img src={Image2.src} alt="" />
            </div>
            <div className="basis-full order-1 lg:order-2">
              <div className="font-bold text-[28px] text-secondary">
                Responses in less than 24 hours!
              </div>
              <div className="text-gray-400 mt-4">
                {`Our team is committed to getting your questions answered
                promptly. You can expect a response to your inquiry within 24
                hours during peak application season. If we can't solve your
                issue that quickly, we will let you know that it is being worked
                on and that we'll even update our platform to make it better!`}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 lg:gap-16 flex-col lg:flex-row mt-8">
            <div className="basis-full">
              <div className="font-bold text-[28px] text-secondary">
                Direct Communication With Our Users
              </div>
              <div className="text-gray-400 mt-4">
                We have full time support staff answering your questions. You
                will be connected with someone with experience and knowledge in
                the residency application process for a direct response
              </div>
            </div>
            <div className="basis-full flex justify-end">
              <img src={Image3.src} alt="" />
            </div>
          </div>
          <div className="flex items-center  gap-8 lg:gap-16 flex-col lg:flex-row">
            <div className="basis-full flex order-2 lg:order-1">
              <img src={Image4.src} alt="" />
            </div>
            <div className="basis-full order-1 lg:order-2">
              <div className="font-bold text-[28px] text-secondary">
                24/7 Online Help Desk Trained With AI
              </div>
              <div className="text-gray-400 mt-4">
                Coming soon! A 24/7 AI help tool to answer our most common
                questions.
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-24">
          <div className="uppercase font-semibold text-secondary">security</div>
          <div className="text-gray font-medium text-[32px] max-w-2xl mx-auto">
            Our Ongoing Commitment To Keeping You Safe & Secure
          </div>
          <div className="text-gray-400 max-w-xl mx-auto mt-8">
            Providing the highest level of data privacy and security in modern
            technology.
          </div>
        </div>
        <div className="max-w-7xl px-4 mx-auto mt-24">
          <div className="flex items-center  gap-8 lg:gap-16 mt-8 flex-col lg:flex-row">
            <div className="basis-full">
              <div className="font-bold text-[28px] text-secondary">
                Keeping Your Data Protected
              </div>
              <div className="text-gray-400 mt-4">
                In addition to standard measures such as email verification and
                two factor authentication, we protect your data to the highest
                degree using encryption strategies similar to those of major
                technological companies. We utilize an AWS relational database
                only accessible by our backend server running inside AWS. To
                further ensure security of the data, we employ several
                additional cybersecurity measures including encryption at rest
                and in transit as well as access control using AWS identity and
                access management.
              </div>
            </div>
            <div className="basis-full flex justify-end">
              <img src={Image5.src} alt="" />
            </div>
          </div>
          <div className="flex items-center  gap-8 lg:gap-16 flex-col lg:flex-row mt-16">
            <div className="basis-full flex order-2 lg:order-1">
              <img src={Image6.src} alt="" />
            </div>
            <div className="basis-full order-1 lg:order-2">
              <div className="font-bold text-[28px] text-secondary">
                Verifying Data Accuracy
              </div>
              <div className="text-gray-400 mt-4">
                We are invested in ensuring that the data you receive in the
                application is verified. We utilize a user verification system
                that ensures that your letters, MPSEs, and transcripts are
                uploaded by verified user accounts. We employ an internal AI
                flagging system that triggers investigation of any suspicious
                activity, providing our users with full confidence of data
                accuracy.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl px-4 py-10 mx-auto flex items-center justify-between gap-8 text-white flex-col">
          <div className="text-[24px] md:text-[48px] font-semibold">
            More from CentralApp
          </div>
          <div className="flex gap-4 font-medium flex-col md:flex-row">
            <Link href="/contact">
              <button
                className={`rounded-md w-full md:w-auto text-[18px] border-glen border bg-glen text-white py-3 px-6 tracking-wider font-medium`}
              >
                Contact Us
              </button>
            </Link>
            <Link href="/features">
              <button
                className={`rounded-md w-full md:w-auto text-[18px] border-glen border text-glen bg-white py-3 px-6 tracking-wider font-medium`}
              >
                Features
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
