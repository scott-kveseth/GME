"use client";
import Slider from "react-slick";

const features = [
  {
    name: "Cost Savings - 95% cost reduction!",
    text: "CentralApp slashes application expenses by over 95%.",
  },
  {
    name: "Completely Customizable",
    text: "Fully customizable application content and format, each program can tailor the process to fit its unique needs.",
  },
  {
    name: "Quality over Quantity",
    text: "Emphasizes meaningful content by streamlining the application into roughly four concise pages, enabling both parties to concentrate on what truly matters.",
  },
  {
    name: "Enhanced Verification and Security",
    text: "We enhance the integrity of the application process through rigorous verification of scores, grades, and references, instilling confidence in both institutions and students.",
  },
  {
    name: "Seamless Interview Management",
    text: "CentralApp integrates a free scheduling tool for interviews, facilitating smooth coordination for all involved.",
  },
  {
    name: "Thoughtful User Experience",
    text: "Designed with users in mind, CentralApp offers an intuitive interface that pleases both program directors and applicants.",
  },
  {
    name: "More Efficient Review",
    text: "Signaling reduces our application review times 80%. AI, NLP, ML and other evolving techniques are the ultimate enhancers of the review process, we are at the forefront.",
  },
  {
    name: "Immediate, Human Assistance",
    text: "You will reach a person who runs and is committed to the endeavor personally.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function FeaturesOutline() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-7xl mx-auto mt-8">
        <Slider {...settings} autoplay arrows={false}>
          {features.map((c) => (
            <div key={c.name} className="feature-box py-4">
              <div className="relative overflow-hidden p-8 bg-white text-black mx-2 mb-4 h-[220px] rounded-lg border-2 border-gray-200 shadow flex items-center justify-center">
                <h5 className="text-[20px] text-center font-medium">
                  {c.name}
                </h5>
                <div className="feature-content absolute left-0 p-6 transition-all text-center text-white w-full flex items-center justify-center bg-secondary">
                  <p className="tracking-wider">{c.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
