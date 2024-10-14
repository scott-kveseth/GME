/* eslint-disable @next/next/no-img-element */
import BackImg from "@/assets/images/whychooseus.png";
import RewardImg from "@/assets/images/reward.svg";

export default function WhyChooseUs() {
  return (
    <div className="py-12 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex gap-12 flex-col lg:flex-row">
        <div className="basis-1/2">
          <p className="text-primary font-semibold tracking-widest mt-3 uppercase">
            why choose us
          </p>
          <h1 className="font-semibold text-[32px]">
            Why You Should Choose The Residency Central Application?
          </h1>
          <p className="text-gray-400 mt-6">
            As leaders in medical education ourselves, we have unique experience
            in understanding what tools are needed, and we are invested in
            developing them with integrity.
          </p>
          <div className="items-center flex gap-6 mt-6">
            <div>
              <img src={RewardImg.src} alt="" className="w-[50px]" />
            </div>
            <div className="basis-full font-semibold italic text-gray-400">
              Improving equity residency selection by removing financial
              barriers and promoting holistic review
            </div>
          </div>

          <div className="items-center flex gap-6 mt-6">
            <div>
              <img src={RewardImg.src} alt="" className="w-[50px]" />
            </div>
            <div className="basis-full font-semibold italic text-gray-400">
              Developed with years of piloting experience in Plastic Surgery
            </div>
          </div>

          <div className="items-center flex gap-6 mt-6">
            <div>
              <img src={RewardImg.src} alt="" className="w-[50px]" />
            </div>
            <div className="basis-full font-semibold italic text-gray-400">
              100% customizable application content and format, ensuring every
              program can tailor the process.
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <img
            src={BackImg.src}
            className="home-responsive-img hidden lg:block lg:absolute"
            style={{ width: "760px", top: 0 }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
