/* eslint-disable @next/next/no-img-element */
"use client";
import Member1 from "@/assets/images/team/1.png";
import Member2 from "@/assets/images/team/2.png";
import Member3 from "@/assets/images/team/3.png";
import Member4 from "@/assets/images/team/4.png";
import Member5 from "@/assets/images/team/5.png";
import Member6 from "@/assets/images/team/6.png";
import PageHeader from "@/components/shared/PageHeader";
import { useRequestDemo } from "@/contexts/RequestDemoContext";
import Link from "next/link";

const members = [
  {
    img: Member1,
    role: "Co-Founder, CEO",
    name: "Kianna Jackson, MD",
    bio: `Kianna is a current plastic surgery resident who understands first-hand the financial burden that the residency application process places on medical students. As a first-generation college student and the first physician in her family, she took out a private loan to apply to plastic surgery residency, fueling her desire to create a better system for future applicants. With the support of her soon to be program director and chair, she helped launch the first version of the CentralApp within Plastic Surgery. She now leads the team as CEO, and continues to challenge the systems in place that contribute to inequity within medical education. Outside of her role within LCA, Kianna is interested in reconstructive plastic surgery and mentorship for underrepresented minorities within medicine. She grew up in Indiana with her mother and younger sister who is a soon-to-be OBGYN resident. She received her undergraduate degree from MIT prior to attending Vanderbilt University School of Medicine where she graduated at the top of her class receiving the Founders Medal. She looks forward to continuing to break down systemic barriers within graduate medical education and beyond.`,
  },
  {
    img: Member5,
    role: "Co-Founder, COO",
    name: "Brian Drolet, MD",
    bio: `Brian Drolet is an academic hand surgeon, a medical educator, a surgical ethicist, and an advocate for LGBTQ persons. He has served in a number of medical education roles including as clerkship director and chair of the immersion phase promotions committee. Most recently, he has been a program director for the last five years, and he decided four years ago that the residency application process desperately needed overhaul. Working with Kianna, who was one of his mentees and medical students, his residency was the first program to divorce from ERAS -- and CentralApp was born. Joining forces with his department chair, Galen, and colleague, Jeff, this team grew CentralApp within plastic surgery through collaboration with friendly program directors, coordinators and other key stakeholders in plastic surgery as the Plastic Surgery Central Application. Now Brian is leading the operations team for CentralApp, growing our footprint into more specialties including anesthesiology, urology and neurology. Outside of this work, Brian and his partner had their first child in March this year. He is also passionate about environmental sustainability and social justice, and has plans to leverage his work at Learner Centric Applications to advance these causes across medical education and the healthcare system.`,
  },
  {
    img: Member4,
    role: "CTO",
    name: "Robert Pooley",
  },
  {
    img: Member3,
    role: "Founding Partner",
    name: "Galen Perdikis, MD",
    bio: `Galen Perdikis, M.D., is currently the G. Patrick Maxwell Endowed Chair and Professor of Plastic Surgery at Vanderbilt University Medical Center. He previously was Chairman of Plastic Surgery and Medical Director for Education at Mayo Clinic Florida. Hecompleted both plastic surgery and general surgery training and his research and clinical interests are focused on breast reconstruction, microsurgical options, and cosmetic surgery, particularly safety. He is a frequent invited speaker both domestically and internationally, has won awards and developed and published written guidelines on breast reconstruction and reduction mammaplasty for ASPS.
    Dr. Perdikis holds many professional memberships and has served in many leadership roles around organized plastic surgery. Dr. Perdikis has also had a long career in educating and organized education. He is passionate about making wholesale changes to an entrenched clumsy system. Partnering with
    like-minded top notch humans such as Brian, Kianna and beyond has created a force of change for the good and thus LCA was born. "I just love that we are truly learner centric and able to provide superior platforms and tools to our educators. And we are having a blast!"`,
  },
  {
    img: Member2,
    role: "Founding Partner",
    name: "Jeffrey Janis, MD",
    bio: `Jeffrey is a Professor of Plastic Surgery at The Ohio State University Wexner Medical Center in Columbus, Ohio. He is also Chief of Plastic Surgery at University Hospital, Co-Director of the Center for Abdominal Core Health, and holds adjunct appointments as a Professor of Neurosurgery, Neurology, and Surgery. He received his business degree from Washington University Olin School of Business, medical degree from Case Western Reserve, and did his plastic surgery training in Dallas at UT Southwestern Medical Center, where he also served as the residency program
    dire and Chiefof Plastic Surgery at Parkland Memorial Hospital. He is a Past President of the American Society of Plastic Surgeons (youngest in the history of the Society), the American Council of Academic Plastic Surgeons (youngest in the history of theSociety), the American Hernia Society (first plastic surgeon), the Columbus Medical Association, and the Migraine Surgery Society (founding President). He is the Editor-in-Chief of the Journal of Plastic and Reconstructive Surgery - Global Open. He also currently serves as a Governor on the Board of Governors for the American College of Surgeons, is a Trustee for ASPS, is a member of the ACGME's Plastic Surgery Residency Review Committee, serves on the Executive Committee for the Surgical Pain Congress (SPC) as well as the Executive Committee for the Ohio Valley Society of Plastic Surgeons.`,
  },
  {
    img: Member6,
    role: "Director Of User Support & Experience",
    name: "Elena Carraby",
    bio: `Born and raised in Southern California, Elena Quiroz Carraby has spent the past 19 years dedicated to the field of plastic surgery at the University of California, Irvine where she currently serves as the esteemed Residency Program Coordinator. In this role, she plays an integral part in shaping the future of plastic surgeons. Her deep-rooted passion for helping others can be traced back to her upbringing by devout pastors. Elena’s childhood was marked by monthly missionary trips, instilling in her a strong commitment to serving the community and making a positive impact on people’s lives. Her dedication and commitment to fellowship and residency education are unwavering as she served as the American Council of Educators in Plastic Surgery (ACEPS) Coordinator President from 2020-2021 and won the Program Coordinator of the Year Award in 2023.  In her role as ACEPS Coordinator President, she was a fierce advocate for use of the Central App, supporting the ultimate goal of removing financial barriers for the students. She worked tirelessly to ensure seamless transition for her fellow coordinators, and provided incredible customer service to our users, making her the obvious choice for Director of User Support and Experience. In this role, she continues to be a powerful learner advocate, and ensures an incredibly thoughtful user experience.`,
  },
];

export default function Demo() {
  const { requestDemo } = useRequestDemo();

  return (
    <div>
      <PageHeader>
        <div className="pt-48 pb-36 px-4 md:px-12 xl:px-4 max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center z-10 relative text-center">
          <h1 className="font-bold text-[36px] md:text-[64px] text-secondary mb-2 md:mb-3">
            Our Team
          </h1>
          <div className="max-w-6xl text-[24px] md:text-[32px] font-medium">
            Our team is made up of physicians and engineers directly invested in
            the residency section process.
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
      <div className="bg-white py-24">
        <div className="max-w-7xl px-4 flex flex-col gap-16 lg:gap-24 mx-auto">
          {members.map((m, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center p-4 lg:p-0 gap-16"
            >
              <div
                className={`basis-1/3 ${
                  index % 2 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img src={m.img.src} alt="" />
              </div>
              <div
                className={`basis-2/3 pt-12 ${
                  index % 2 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="rounded-lg text-secondary bg-[#E7F1ED] p-2 font-medium text-[12px]">
                  {m.role}
                </span>
                <div className="text-black font-semibold text-[32px] mt-4">
                  {m.name}
                </div>
                <div className="text-gray-400 font-light mt-8">
                  {m.bio ||
                    `Lorem ipsum dolor sit amet, consecte adipiscing elit.
                  Curabitur elementum purus arcu, quis convallis velit semper
                  quis. Donec iaculis. Lorem ipsum dolor sit amet, consecte
                  adipiscing elit. Curabitur elementum purus arcu, quis convallis velit semper
                  quis. Donec iaculis.Lorem ipsum dolor sit amet, consecte
                  adipiscing elit. Curabitur elementum purus arcu, quis
                  convallis velit semper quis. Donec iaculis. Lorem ipsum dolor
                  sit amet, consecte adipiscing elit. Curabitur elementum purus
                  arcu, quis convallis velit semper quis. Donec iaculis. Lorem
                  ipsum dolor sit amet, consecte adipiscing elit. Curabitur
                  elementum purus arcu, quis convallis velit semper quis. Donec
                  iaculis.Lorem ipsum dolor sit amet, consecte adipiscing elit.
                  Curabitur elementum purus arcu, quis convallis velit semper
                  quis. Donec iaculis.`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
