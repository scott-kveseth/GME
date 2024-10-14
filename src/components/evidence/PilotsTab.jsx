/* eslint-disable @next/next/no-img-element */
import Image1 from "@/assets/images/evidence/pilots/1.png";
// import Image2 from "@/assets/images/evidence/pilots/2.png";
import Image3 from "@/assets/images/evidence/pilots/3.png";
import Image4 from "@/assets/images/evidence/pilots/4.png";
import Image5 from "@/assets/images/evidence/pilots/5.png";
import Image6 from "@/assets/images/evidence/pilots/6.png";
import Image7 from "@/assets/images/evidence/pilots/7.png";
import Image8 from "@/assets/images/evidence/pilots/8.png";
import Literature1 from "@/assets/images/evidence/pilots/li1.png";
import Literature2 from "@/assets/images/evidence/pilots/li2.png";
import Literature3 from "@/assets/images/evidence/pilots/li3.png";
import Literature4 from "@/assets/images/evidence/pilots/li4.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Testimonials from "../home/Testimonials";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PILOTS = [
  {
    title: "Creating the PSCA 1.0",
    subtitle: "A proof of concept",
    text: "The Residency Central Application began as a proof-of-concept within Plastic Surgery. The application, modeled from the NIH biosketch, was carefully crafted to focus on the most significant experiences, condensing the application content. Our free pilot application had 20 (24%) participating programs and received 181 applications.",
    image: Image1,
  },
  {
    title: "Getting Feedback",
    subtitle: "Critical feedback from medical students and reviewers",
    text: "A follow-up survey demonstrated that reviewers and programs had positive experiences with the PSCA in most domains. Applicants felt that while the REDCAP software was not user friendly, and wanted to showcase more of their application, both reviewers and applicants felt that the PSCA could replace ERAS.",
    image: null,
    replacement: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="89"
          height="80"
          viewBox="0 0 89 80"
          fill="none"
        >
          <path
            d="M80.1002 0C82.4605 0 84.7242 0.936501 86.3933 2.60349C88.0623 4.27048 89 6.5314 89 8.88889V30.5956C89 32.953 88.0623 35.214 86.3933 36.8809C84.7242 38.5479 82.4605 39.4844 80.1002 39.4844H67.7472C67.7472 42.6044 67.9341 45.7333 68.299 48.8533C68.8507 52.16 69.7763 55.1022 71.0579 57.6711C72.3484 60.2489 74.0038 62.2667 76.0329 63.7422C78.0532 65.3956 80.6252 66.2222 83.758 66.2222V80C78.605 80 74.1016 78.8978 70.2302 76.6933C66.3925 74.5112 63.0929 71.4982 60.5739 67.8756C58.0457 63.8816 56.1822 59.5049 55.056 54.9156C53.9211 49.851 53.3658 44.6741 53.4006 39.4844V8.88889C53.4006 6.5314 54.3383 4.27048 56.0073 2.60349C57.6764 0.936501 59.9401 0 62.3005 0H80.1002ZM26.7011 0C29.0615 0 31.3252 0.936501 32.9942 2.60349C34.6633 4.27048 35.6009 6.5314 35.6009 8.88889V30.5956C35.6009 32.953 34.6633 35.214 32.9942 36.8809C31.3252 38.5479 29.0615 39.4844 26.7011 39.4844H14.3481C14.3481 42.6044 14.535 45.7333 14.8999 48.8533C15.4517 52.16 16.3773 55.1022 17.6588 57.6711C18.9493 60.2489 20.6047 62.2667 22.6339 63.7422C24.6541 65.3956 27.2262 66.2222 30.3589 66.2222V80C25.2059 80 20.7026 78.8978 16.8311 76.6933C12.9934 74.5112 9.69385 71.4982 7.17482 67.8756C4.6466 63.8816 2.78314 59.5049 1.65691 54.9156C0.522059 49.851 -0.0332905 44.6741 0.00154215 39.4844V8.88889C0.00154215 6.5314 0.939201 4.27048 2.60825 2.60349C4.27729 0.936501 6.541 0 8.90139 0H26.7011Z"
            fill="#EBE7E7"
          />
        </svg>
        <div className="text-[30px] text-secondary font-semibold my-4">
          Overall: This was a great pilot for what should be the norm in the
          residency application process
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1">
            <span className="text-[24px] text-glen">–</span>
            <span className="font-semibold">2021 Applicant</span>
          </div>
          <div>
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
    ),
  },
  {
    title: "A Specialty-Wide Pilot",
    subtitle:
      "Supported by the  American Council of Academic Plastic Surgeons (ACAPS)",
    text: "In 2021, we went back to the drawing board. We had proven that this could work, but we needed better software. We tried an off-the-shelf product and had nearly full specialty participation with 82/86 programs accepting the PSCA and 12 programs removing themselves from ERAS entirely.",
    image: Image3,
  },
  {
    title: "Gaining Support in Plastic Surgery",
    subtitle: "Applicant’s & Reviewer’s Appreciation For Us",
    text: "We had 336 completed applications, and following this pilot, 80% of applicants supported moving forward with the PSCA ONLY in future cycles.",
    image: Image4,
  },
  {
    title: "Creating Learner Centric Applications",
    subtitle: "We Wanted To Do More",
    text: (
      <div>
        <p>
          Despite our positive feedback, we weren’t yet satisfied. We realized
          that there was not an off-the-shelf product that was going to fully
          meet our needs. We formally crafted our team, hiring software
          developers, designers, and support staff – forming{" "}
          <span className="italic">Learner Centric Applications</span> and built
          our own product from the ground up.
        </p>
      </div>
    ),
    image: Image5,
  },
  {
    title: "Building Our Own System",
    subtitle: "Using years of experience",
    text: (
      <div>
        <p>
          This application was crafted using feedback from both pilots, remained
          completely free to applicants, and offered features not available in
          ERAS. We continued with a majority of plastic surgery programs, and
          had over 25% of programs accept the PSCA ONLY.
        </p>
        <p className="font-semibold text-purple mt-4 ml-1">
          $180,000 of applicant dollars saved
        </p>
      </div>
    ),
    image: Image6,
  },
  {
    title: "Where we are now",
    subtitle: "Breaking barriers",
    text: "After several years of piloting within plastic surgery, we have created a successful application platform that not only improves the content of the application and the review process for programs, but also cuts applicants costs by >95%. The newly named Plastic Surgery Central Application (PSCA) is now accepted as the ONLY application by the majority of plastic surgery programs.",
    image: Image8,
  },
  {
    title: "Expanding the Central Application",
    subtitle: "Moving beyond Plastic Surgery",
    text: "This year, the CentralApp is offering pilot applications in Anesthesiology, Urology, Emergency Medicine, and Neurology!",
    image: Image7,
  },
];

const literatures = [
  {
    link: "https://journals.lww.com/annalsplasticsurgery/abstract/2023/04000/comparative_evaluation_of_the_electronic_residency.18.aspx",
    image: Literature1,
  },
  {
    link: "https://linkinghub.elsevier.com/retrieve/pii/S1748-6815(23)00046-3",
    image: Literature2,
  },
  {
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9839255/",
    image: Literature3,
  },
  {
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8849438/",
    image: Literature4,
  },
];

export default function PilotsTab() {
  return (
    <div className="pt-36" id="pilots">
      <div className="text-center">
        <div className="uppercase text-secondary font-semibold">
          Our journey
        </div>
        <div className="max-w-xl text-[20px] md:text-[32px] font-medium mx-auto mt-4">
          Journey Of The Plastic Surgery Common Application (PSCA)
        </div>
      </div>
      <div className="pt-12 pb-24 px-4 lg:px-16 xl:px-24 2xl:px-48">
        {PILOTS.map((p, index) => (
          <div key={p.title} className="flex flex-col lg:flex-row items-center">
            <div
              className={`basis-full py-24 ${
                index % 2 ? "lg:order-3" : "lg:order-1"
              }`}
            >
              <div className="rounded-xl shadow-lg border px-4 pb-6 pt-10 relative">
                <div className="absolute rounded-xl text-white bg-secondary left-4 -top-8 lg:-top-12 w-[48px] h-[48px] lg:w-[74px] lg:h-[74px] flex items-center justify-center text-[20px] lg:text-[30px] font-medium">
                  {index + 1}
                </div>
                <div className="font-bold text-secondary text-[22px] mb-4">
                  {p.title}
                </div>
                <span className="p-1 bg-[#E7F1ED] text-[12px] font-medium text-secondary rounded-md">
                  {p.subtitle}
                </span>
                <div className="text-gray-400 mt-3">{p.text}</div>
              </div>
            </div>
            <div className="hidden order-2 px-12 lg:flex items-center self-stretch">
              {
                <div
                  className={`${
                    !(index % 2) ? "border-glen" : "border-transparent"
                  } w-[64px] border-[2px]`}
                ></div>
              }
              <div className="self-stretch">
                {index === 0 || index === PILOTS.length - 1 ? (
                  <div
                    style={{
                      height: `calc(50% + 2px)`,
                      transform:
                        index === 0 ? `translateY(calc(100% - 3.5px))` : "",
                    }}
                    className={`bg-glen w-[4px]`}
                  />
                ) : (
                  <div className="bg-glen h-full w-[4px]" />
                )}
              </div>
              <div
                className={`${
                  !index || index % 2 ? "border-glen" : "border-transparent"
                } w-[64px] border-2`}
              ></div>
            </div>
            <div
              className={`basis-full ${
                index % 2 ? "order-1" : "order-2"
              } flex justify-center`}
            >
              {p.image ? <img src={p.image.src} alt="" /> : p.replacement}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F9F5F5] py-24" id="evidence">
        <div className="px-4 max-w-7xl mx-auto">
          <p className="text-primary font-semibold tracking-widest mt-3 uppercase">
            Literature
          </p>
          <div className="flex gap-8 flex-col lg:flex-row mb-16">
            <h4 className="text-[24px] md:text-[32px] font-semibold mt-2 basis-1/2">
              Demonstrated User Preference In Published Literature
            </h4>
          </div>
          <div>
            <Slider {...settings}>
              {literatures.map((l) => (
                <div key={l.link} className="px-2 pb-4">
                  <div className="basis-full flex flex-col justify-between bg-white rounded-md overflow-hidden shadow h-[300px]">
                    <img src={l.image.src} alt="" width="100%" />
                  </div>
                  <div className="mt-3 flex">
                    <a
                      className="border-b text-glen border-glen flex items-center gap-1"
                      href={l.link}
                      target="_blank"
                    >
                      <span className="font-medium">Visit Website</span>
                      <ArrowTopRightOnSquareIcon className="w-[16px] h-[16px]" />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="py-16" id="testimonials">
        <Testimonials bg={"bg-white"} />
      </div>
    </div>
  );
}
