/* eslint-disable @next/next/no-img-element */
import MissionOverview from "@/components/home/MissionOverview";
import Features from "@/components/home/Features";

import Testimonials from "@/components/home/Testimonials";
import WhyCreated from "@/components/home/WhyCreated";
import PublishedLiterature from "@/components/home/PublishedLiterature";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQ from "@/components/home/FAQ";
import Quote from "@/components/home/Quote";

export default function Home() {
  return (
    <>
      <MissionOverview />
      <WhyCreated />
      <PublishedLiterature />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Quote />
    </>
  );
}
