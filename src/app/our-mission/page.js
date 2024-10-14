/* eslint-disable @next/next/no-img-element */
"use client";
import TargetImg from "@/assets/images/mission/target.png";
import LaptopImg from "@/assets/images/mission/laptop.png";
import ScreenImg from "@/assets/images/mission/screen.png";
import BackgroundImg from "@/assets/images/mission/bg.png";
import WhyCentralAppImg from "@/assets/images/mission/whycentralapp.png";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { useRequestDemo } from "@/contexts/RequestDemoContext";

export default function OurMission() {
  const { requestDemo } = useRequestDemo();

  return (
    <div>
      <PageHeader>
        <div className="pt-48 pb-36 px-4 md:px-12 xl:px-4 max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center z-10 relative text-center">
          <div className="flex items-end gap-4">
            <h1 className="font-bold text-[36px] md:text-[64px] text-secondary mb-2 md:mb-3">
              Our Mission
            </h1>
            <img
              src={TargetImg.src}
              alt=""
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </div>
          <div className="max-w-5xl text-[24px] md:text-[32px] font-medium">
            Making a more equitable residency selection process by{" "}
            <span className="text-secondary">
              eliminating financial barriers
            </span>{" "}
            and promoting holistic application review
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

      <div className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-24 items-center flex-col lg:flex-row">
            <div className="basis-1/2">
              <div className="text-primary font-semibold uppercase">
                The Story
              </div>
              <div className="text-[32px] tracking-wider font-medium">
                Why CentralApp?
              </div>
              <div className="text-gray-400">
                <p className="mt-10">
                  From the outset, our mission was clear – remove financial
                  barriers in the residency application process and improve the
                  review experience for programs. As a team of medical
                  educators, we watched for years as students on their path to
                  becoming doctors were shouldering an overwhelming financial
                  burden -- and this was increasing every year!
                </p>
                <p className="mt-6">
                  {`Contrary to the intended purpose, progressive fee structures were not discouraging excessive overapplication. In fact, the number of residency applications across all specialties has increased every year for more than a decade.  The result is a daunting financial barrier, sidelining many talented applicants who couldn’t bear the cost.`}
                </p>
                <p className="text-primary mt-6">
                  <span className="text-[32px]">100+ million</span>
                  <span className="ml-2 font-semibold">
                    in annual application costs
                  </span>
                </p>
              </div>
            </div>
            <div className="basis-1/2">
              <img
                src={WhyCentralAppImg.src}
                alt=""
                height="auto"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F5F5] py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative px-4 lg:items-center">
          <div className="basis-1/2 flex justify-center items-start">
            <img
              src={ScreenImg.src}
              alt=""
              className="w-auto lg:w-full h-auto"
            />
          </div>
          <div className="basis-1/2">
            <div className="text-secondary font-bold text-[36px] sm:text-[60px]">
              There’s A Way <br />
              To Do It Better – <br />
              <div className="flex items-center gap-8">
                <span>Find It</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                >
                  <path
                    d="M9.04907 18.7325L12.6877 19.703C16.4027 20.6936 19.2196 23.7819 19.9157 27.6269L20.5521 31.1425L21.191 27.6227C21.8887 23.7799 24.7046 20.6941 28.4176 19.703L32.0557 18.7325L28.4115 17.7831C24.701 16.8162 21.8704 13.7573 21.1445 9.92834L20.5521 6.80652L19.9623 9.92422C19.2373 13.7552 16.4062 16.8162 12.6937 17.7831L9.04907 18.7325Z"
                    fill="#EDB715"
                  />
                  <path
                    d="M1.85248 30.45L4.09933 31.0494C6.39325 31.6612 8.13281 33.5682 8.56314 35.9427L8.95652 38.1136L9.3509 35.9401C9.78174 33.5672 11.5203 31.6612 13.8137 31.0494L16.0605 30.45L13.8102 29.8635C11.5188 29.2661 9.77111 27.3772 9.32255 25.013L8.95702 23.0848L8.5925 25.0104C8.14496 27.3761 6.39629 29.2666 4.10388 29.8635L1.85248 30.45Z"
                    fill="#FFD12D"
                  />
                  <path
                    d="M24.5312 7.36516L26.778 7.96457C29.072 8.57636 30.812 10.4839 31.2418 12.8578L31.6352 15.0287L32.0296 12.8553C32.4604 10.4823 34.1995 8.57636 36.4924 7.96457L38.7393 7.36516L36.4889 6.77863C34.1975 6.18127 32.4498 4.2923 32.0013 1.92813L31.6357 0L31.2712 1.92555C30.8237 4.29127 29.075 6.18179 26.7826 6.77915L24.5312 7.36516Z"
                    fill="#FFD12D"
                  />
                  <path
                    d="M3.7041 20.8551C3.7041 19.814 2.87482 18.9697 1.85215 18.9697C0.828971 18.9697 0.000201941 19.814 0.000201941 20.8551C0.000201941 21.8967 0.829477 22.7404 1.85215 22.7404C2.87482 22.7404 3.7041 21.8962 3.7041 20.8551Z"
                    fill="#51C1BB"
                  />
                  <path
                    d="M31.6357 26.0329C31.6357 24.9913 30.8065 24.1476 29.7838 24.1476C28.7606 24.1476 27.9318 24.9918 27.9318 26.0329C27.9318 27.0741 28.7611 27.9183 29.7838 27.9183C30.8065 27.9183 31.6357 27.0746 31.6357 26.0329Z"
                    fill="#51C1BB"
                  />
                  <path
                    d="M5.87109 16.0592C5.87109 15.4902 5.41798 15.0289 4.85905 15.0289C4.30013 15.0289 3.84701 15.4902 3.84701 16.0592C3.84701 16.6282 4.30013 17.0895 4.85905 17.0895C5.41798 17.0895 5.87109 16.6282 5.87109 16.0592Z"
                    fill="#51C1BB"
                  />
                  <path
                    d="M35.2344 29.7456C35.2344 29.1766 34.7813 28.7153 34.2223 28.7153C33.6634 28.7153 33.2103 29.1766 33.2103 29.7456C33.2103 30.3146 33.6634 30.7759 34.2223 30.7759C34.7813 30.7759 35.2344 30.3146 35.2344 29.7456Z"
                    fill="#51C1BB"
                  />
                  <path
                    d="M2.61719 12.7228C2.61719 12.2924 2.27444 11.943 1.8517 11.943C1.42896 11.943 1.08622 12.2919 1.08622 12.7228C1.08622 13.1532 1.42896 13.5021 1.8517 13.5021C2.27444 13.5026 2.61719 13.1537 2.61719 12.7228Z"
                    fill="#51C1BB"
                  />
                  <path
                    d="M26.9189 33.0857C26.9189 32.6554 26.5762 32.3059 26.1535 32.3059C25.7307 32.3059 25.388 32.6548 25.388 33.0857C25.388 33.5161 25.7307 33.865 26.1535 33.865C26.5757 33.8655 26.9189 33.5166 26.9189 33.0857Z"
                    fill="#51C1BB"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-glen text-[48px] font-light">-</span>
              <span className="text-gray font-semibold pl-2">
                Thomas Edison
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="80"
                viewBox="0 0 89 80"
                fill="none"
              >
                <path
                  d="M8.89985 0C6.53947 0 4.27576 0.936501 2.60671 2.60349C0.937668 4.27048 7.62939e-06 6.5314 7.62939e-06 8.88889V30.5956C7.62939e-06 32.953 0.937668 35.214 2.60671 36.8809C4.27576 38.5479 6.53947 39.4844 8.89985 39.4844H21.2528C21.2528 42.6044 21.0659 45.7333 20.701 48.8533C20.1493 52.16 19.2237 55.1022 17.9421 57.6711C16.6516 60.2489 14.9962 62.2667 12.9671 63.7422C10.9468 65.3956 8.37476 66.2222 5.24201 66.2222V80C10.395 80 14.8984 78.8978 18.7698 76.6933C22.6075 74.5112 25.9071 71.4982 28.4261 67.8756C30.9543 63.8816 32.8178 59.5049 33.944 54.9156C35.0789 49.851 35.6342 44.6741 35.5994 39.4844V8.88889C35.5994 6.5314 34.6617 4.27048 32.9927 2.60349C31.3236 0.936501 29.0599 0 26.6995 0H8.89985ZM62.2989 0C59.9385 0 57.6748 0.936501 56.0058 2.60349C54.3367 4.27048 53.3991 6.5314 53.3991 8.88889V30.5956C53.3991 32.953 54.3367 35.214 56.0058 36.8809C57.6748 38.5479 59.9385 39.4844 62.2989 39.4844H74.6519C74.6519 42.6044 74.465 45.7333 74.1001 48.8533C73.5483 52.16 72.6227 55.1022 71.3412 57.6711C70.0507 60.2489 68.3953 62.2667 66.3661 63.7422C64.3459 65.3956 61.7738 66.2222 58.6411 66.2222V80C63.7941 80 68.2974 78.8978 72.1689 76.6933C76.0066 74.5112 79.3061 71.4982 81.8252 67.8756C84.3534 63.8816 86.2169 59.5049 87.3431 54.9156C88.4779 49.851 89.0333 44.6741 88.9985 39.4844V8.88889C88.9985 6.5314 88.0608 4.27048 86.3918 2.60349C84.7227 0.936501 82.459 0 80.0986 0H62.2989Z"
                  fill="#EBE7E7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24">
        <div className="flex gap-12 lg:gap-24 max-w-7xl mx-auto px-4 flex-col lg:flex-row items-start lg:items-center">
          <div className="basis-1/2">
            <div className="uppercase font-semibold text-secondary">
              A better way
            </div>
            <div className="text-[32px] font-medium mb-8">Enter CentralApp</div>
            <p className="text-gray-400">
              {`By building a platform from scratch and keeping costs low, our dedicated team of medical educators has cut application expenses by > 95%.`}
              <br />
              <br />
              {`Recognizing the archaic and cumbersome user experience of existing platforms, we rolled out an interface that was not just modern, but also intuitive for both applicants and programs. By honing in on the essentials and trimming the excess, we successfully condensed applications to a crisp 4-5 pages. Combined with signaling, this reduced review time by as much as 80%.`}
            </p>
          </div>
          <div className="basis-1/2">
            <img
              src={LaptopImg.src}
              alt=""
              className="w-full lg:scale-125 lg:translate-x-8"
            />
          </div>
        </div>
      </div>
      <div
        className="py-24"
        style={{
          background: `url(${BackgroundImg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white text-center max-w-7xl font-medium mx-auto text-[20px] md:text-[32px] px-4 lg:px-0">
          {`At the heart of CentralApp, our ethos remains unwavering:
                leveling the playing field in residency selection. We're
                ardently committed to eliminating financial roadblocks and
                championing a holistic review approach, ensuring every deserving
                candidate gets their rightful shot at success.`}
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
