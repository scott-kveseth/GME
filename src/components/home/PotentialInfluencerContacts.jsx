import Influencer from "@/assets/images/83.jpg";
import Image from "next/image";

export default function PotentialInfluencerContacts() {
  return (
    <div className="pb-24 relative">
      <div className="background-blur-top" />
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="font-semibold text-[48px] mb-16">
          Potential Influencer Contacts
        </h1>
        <div className="max-w-2xl p-8 bg-white">
          <div className="mb-4">
            <Image
              src={Influencer}
              alt=""
              width={120}
              height={120}
              className="border-primary rounded-full"
            />
          </div>
          <div className="basis-2/3">
            <p className="text-secondary text-[20px] font-semibold">
              Jake Goodman, MD
            </p>
            <p className="mt-4 text-[14px]">
              Jake Goodman is a psychiatry resident physician, mental health
              activist, & social media content creator with over 2 million
              followers on his social media channels. Jake uses his platform to
              fight mental health stigma and discrimination and empower those
              experiencing mental health challenges to seek help. He also
              creates educational videos to teach mental health concepts in an
              engaging manner. <br /> <br /> Recently, Jake had the opportunity
              to participate in the Healthcare Leaders in Social Media Round
              Table Series for the White House, where he was involved in
              creating content for the role out of the 988 Suicide & Crisis
              Lifeline. Jake openly shared his experience battling depression
              while in residency training in his TEDx talk. His work has been
              featured in Psychiatric Times, Today.com, Medscape, NBC
              Philadelphia, and more. Jake hopes to reduce the stigma associated
              with healthcare providers seeking help for their mental health and
              advocate for systemic changes in medical training that improve
              medical student and resident wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
