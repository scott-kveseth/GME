"use client";

import FeaturesOutline from "./FeaturesOutline";
import LearnMoreLink from "../shared/LearnMoreLink";

export default function Features() {
  return (
    <div className="py-12 md:py-24 bg-white relative">
      <div className="background-blur-top" />
      <div className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <p className="text-primary font-semibold tracking-widest mt-3 uppercase">
          Our focus
        </p>
        <h1 className="font-semibold text-[32px] max-w-xl mx-auto">
          Delivering Features That Enhance Holistic Review
        </h1>
      </div>
      <FeaturesOutline />
    </div>
  );
}
