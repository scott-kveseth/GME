"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";

const preferences = {
  title: "Demonstrated user preference in published literature",
  items: [
    {
      name: "Cordero, Justin J et al. “Comparative Evaluation of the Electronic Residency Application Service Versus the Plastic Surgery Common Application to a Single Institution in the 2022 Integrated Plastic Surgery Match.”",
      title: "Annals of plastic surgery",
      reference: "vol. 90,4 (2023): 363-365",
      link: "https://journals.lww.com/annalsplasticsurgery/abstract/2023/04000/comparative_evaluation_of_the_electronic_residency.18.aspx",
    },
    {
      name: "Shih, Sabrina et al. “Applicant Perspective on the Plastic Surgery Common Application (PSCA): A Cross-Sectional Analysis of the 2021-2022 National Residency Matching Program Applicant Pool.”",
      title: "Journal of plastic, reconstructive & aesthetic surgery : JPRAS",
      reference: "vol. 79 (2023): 30-32",
      link: "https://linkinghub.elsevier.com/retrieve/pii/S1748-6815(23)00046-3",
    },
    {
      name: "Elmer, Nicholas A et al. “Perspectives on the Plastic Surgery Common Application (PSCA): A Survey of 2021-2022 Integrated Plastic Surgery Applicants.”",
      title: "Plastic and reconstructive surgery",
      reference: "Global open vol. 11,1 e4766. 13 Jan. 2023",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9839255/",
    },
    {
      name: "Jackson, Kianna R et al. “The Plastic Surgery Common Application: Improving Efficiency and Reducing Inequity in the Application Process.”",
      title: "Plastic and reconstructive surgery",
      reference: "Global open vol. 10,1 e4078. 26 Jan. 2022",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8849438/",
    },
  ],
};

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

export default function PublishedLiterature() {
  return (
    <div className="pt-8 md:pt-16 pb-24 px-4 bg-[#F9F5F5]">
      <div className="max-w-7xl mx-auto text-gray tracking-wider">
        <p className="text-primary font-semibold tracking-widest mt-3 uppercase">
          Literature
        </p>
        <div className="flex gap-8 flex-col lg:flex-row mb-16">
          <h4 className="text-[32px] font-semibold mt-2 basis-1/2">
            Demonstrated User Preference In Published Literature
          </h4>
        </div>
        <div>
          <Slider autoplay {...settings}>
            {preferences.items.map((p) => (
              <div key={p.name} className="px-2">
                <div
                  className="rounded-xl border-l-8 bg-white border-secondary overflow-hidden shadow px-6 py-4"
                  
                >
                  <p className="font-semibold italic min-h-[100px] text-gray-400">{p.name}</p>
                  <p className="font-semibold pt-8 pb-3 text-secondary">
                    {p.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray font-semibold">
                      {p.reference}
                    </p>
                    <a
                      className="border-b text-glen flex items-center gap-1"
                      href={p.link}
                      target="_blank"
                    >
                      <span>Learn More</span>
                      <ArrowUpRightIcon className="w-[16px] h-[16px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
