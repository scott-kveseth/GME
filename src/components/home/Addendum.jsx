import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const contents = [
  {
    title: "Cost Savings",
    text: "CentralApp cuts application costs by >95% ($100 flat fee for plastic surgery applicants, free for all students to pilot programs).",
  },
  {
    title: "Customization",
    text: "CentralApp offers 100% customizable application content and format, ensuring every program can truly tailor the process.",
  },
  {
    title: "Quality over Quantity",
    text: "We have designed the CentralApp to focus on meaningful content, distilling the application to about four succinct pages.",
  },
  {
    title: "Enhanced Security and Verification",
    text: "With our system, there’s improved verification of scores, grades, and reference letters, providing a trustable platform for both institutions and students.",
  },
  {
    title: "Integrated Interview Management",
    text: "We’ve embedded a free interview scheduling and management tool, ensuring seamless coordination for both parties.",
  },
  {
    title: "Advanced Filtering Capabilities",
    text: "The CentralApp has enhanced filters making applicant sorting and ranking smoother than ever.",
  },
  {
    title: "Modern Interface",
    text: "CentralApp has user-friendly, intuitive design for both program directors and applicants.",
  },
  {
    title: "Time savings",
    text: "Programs using CentralApp with signaling cut their review time by >80%.",
  },
];

export default function Addendum() {
  return (
    <div>
      {/* <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 pt-4 pb-24">
          {contents.map((c) => (
            <div
              key={c.title}
              className="border-t border-black text-gray tracking-wider"
            >
              <h5 className="font-semibold my-6">{c.title}</h5>
              <p className="font-light text-[14px]">{c.text}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
