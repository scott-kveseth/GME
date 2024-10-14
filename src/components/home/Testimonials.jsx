"use client";
import { StarIcon } from "@heroicons/react/20/solid";
import Slider from "react-slick";

export const testimonials = [
  {
    title: "On Efficiency",
    texts: [
      "Total time spent reviewing applicants was about 1/3 compared to ERAS times. We matched our three spots in our top 5. That has never been the case before.",
    ],
  },
  {
    title: "On Diversity, Equity, and Inclusion (DEI)",
    texts: [
      "From a DEI perspective, you have more data points for holistic review. It's honestly a far superior platform for that.",
    ],
  },
  {
    title: "Feedback from Program Coordinators",
    texts: ["We're using it and like it. Not even looking at ERAS."],
  },
  {
    title: "Regarding Financial Benefits",
    texts: [
      "It is truly impressive that the CentralApp saved $150,000 in application fees! The potential cost savings to the applicants was our program's main motivation to exclusively accept the CentralApp.",
    ],
  },
  {
    title: "On User-Friendliness and Customization",
    texts: [
      "I find the CentralApp much more user friendly and customizable. I am using it exclusively for my review of all the applicants. I especially like the token introduced this year.",
      "The platform, so far, is incredibly easier to use and work with than ERAS.",
      "I was an ignorant skeptic regarding the CentralApp, but really like it overall now that I've used it. It is generally more user-friendly than ERAS, and the composite PDFs are wonderful.",
    ],
  },
  {
    title: "On Future Use and Acceptance",
    texts: [
      "I hope that in the future, it will be utilized exclusively by all programs.",
      "Our GME had no objections to us replacing ERAS.",
    ],
  },
  {
    title: "Comparison with Other Platforms",
    texts: [
      "I cannot compare the CentralApp to ERAS, but it is far superior to the SFMatch application which I have been using many years.",
      "I have used CentralApp far more this year; it is markedly improved and now is substantially better than ERAS.",
    ],
  },
  {
    title: "On Support and Feedback",
    texts: [
      "There were some significant issues in the first year it was pilotted that have since been fixed. My plan is to only use it (and not ERAS) starting next year.",
    ],
  },
];

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

export default function Testimonials({ bg }) {
  return (
    <div className={`${bg ? bg : "bg-[#F9F5F5]"} pt-16 pb-24`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 xl:px-4">
        <p className="text-primary font-semibold tracking-widest mt-3 uppercase text-center">
          Testimonials
        </p>
        <div className="mb-16">
          <h4 className="text-[24px] md:text-[32px] font-semibold mt-2 text-center">
            Our Proof Is In The User Experience!
          </h4>
        </div>
        <div>
          <Slider {...settings} autoplay>
            {testimonials.map((p) => (
              <div key={p.title} className="px-2 mb-4">
                <div className="rounded-xl bg-white shadow overflow-hidden p-4">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <StarIcon key={idx} className="w-6 h-6 text-[#FFBF1C]" />
                    ))}
                  </div>
                  <p className="font-medium italic min-h-[90px] text-gray-400">
                    {`"${p.texts[0]}"`}
                  </p>
                  <p className="font-semibold pt-8 pb-3 text-secondary">
                    {p.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
