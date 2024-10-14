/* eslint-disable @next/next/no-img-element */
import Application from "./Application";
import Graph from "@/assets/images/Revenue.png";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import MissionImg from "@/assets/images/mission-img.png";
import SavingImg from "@/assets/images/saving.png";

export default function WhyCreated() {
  return (
    <div
      id="application"
      className="text-black bg-white relative py-12 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-24 items-start xl:items-center justify-between px-4 md:px-12 xl:px-4">
          <div className="basis-1/2">
            <p className="text-primary font-semibold tracking-widest uppercase">
              About Us
            </p>
            <h4 className="text-[32px] font-medium mb-8">
              Why did we create the Central App?
            </h4>
            <p className=" xl:max-w-3xl text-[16px] text-gray-400">
              The average residency applicant spends nearly $2000 on residency
              fees each year. This amounts to over{" "}
              <span className="font-semibold text-gray">
                $100 million in application fees from medical students annually
              </span>
              .
              <br />
              <br />
              Our primary focus is creating equity in residency selection by
              eliminating financial barriers and promoting holistic review.
            </p>
            <p className="mt-6 text-primary font-semibold">
              CentralApp was created for the learners, who have shouldered the
              financial burden of UME to GME transition. It was also designed to
              improve the review process, by focusing on quality over quantity
              application content -- designed for individual programs and
              specialties
            </p>
          </div>
          <div className="basis-1/2 w-full md:w-auto">
            <img src={Graph.src} width="100%" alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex gap-16 mt-0 md:mt-16 items-center pt-16 flex-col lg:flex-row px-4 md:px-12 xl:px-4">
          <div className="basis-1/2">
            <div className="block lg:hidden">
              <p className="text-primary font-semibold tracking-widest mt-3">
                Quality over Quantity
              </p>
              <h4 className="mb-8 text-[32px] font-semibold mt-2">
                App Is Designed To Focus On Meaningful Content
              </h4>
            </div>
            <div
              style={{ top: 64, right: "calc(50% + 24px)" }}
              className="w-full lg:w-[600px] xl:w-[700px] lg:block lg:absolute"
            >
              <Application />
            </div>
          </div>
          <div className="basis-1/2 pt-12">
            <p className="text-primary font-semibold tracking-widest mt-3 uppercase">
              Quality over Quantity
            </p>
            <h4 className="mb-8 text-[32px] font-semibold mt-2">
              App Is Designed To Focus On Meaningful Content
            </h4>
            <div className="flex flex-col gap-4 text-gray-400">
              <div className="flex items-start gap-2">
                <CheckCircleIcon className="text-primary w-8 h-8" />
                <p className="pt-1">
                  Our output was carefully crafted to be easy-to-read.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircleIcon className="text-primary w-8 h-8" />
                <p className="pt-1">
                  Shortening the output to 4-5 pages cutting review time by 80%.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <CheckCircleIcon className="text-primary w-8 h-8" />
                </div>
                <p>
                  Developed by program directors and chairs who have reviewed
                  thousands of applications.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <CheckCircleIcon className="text-primary w-8 h-8" />
                </div>
                <p className="pt-1">
                  Completely customizable content by specialty.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-16 mt-0 md:mt-24 items-center pt-32 flex-col lg:flex-row px-4 md:px-12 xl:px-4">
          <div className="basis-1/2">
            <div className="hidden lg:block">
              <p className="text-primary font-semibold tracking-widest mt-3 uppercase">
                Applicant Cost Reduction
              </p>
              <h4 className="mb-8 text-[32px] font-semibold mt-2">
                CentralApp cut application costs by 95% in plastic surgery this
                year
              </h4>
            </div>
            <p className=" mb-6 text-gray-400">
              {`Progressive fee structures do not limit over-application -- as evidenced by increasing numbers of applications across specialties. Meanwhile, progressive fee structures create financial barriers that are fundamentally inequitable.`}
            </p>
            <Link href="/features">
              <button
                className={`rounded-md border-glen border text-glen bg-white py-3 px-6 tracking-wider font-semibold`}
              >
                Learn More
              </button>
            </Link>
          </div>

          <div className="basis-1/2 relative">
            <img src={MissionImg.src} alt="" width="100%" />
            <img src={SavingImg.src} alt="" className="absolute top-0 left-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
