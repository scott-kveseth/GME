const SOUNDBITES = [
  "Improving equity residency selection by removing financial barriers and promoting holistic review",
  "Physician-founded and physician-led.",
  "As leaders in medical education ourselves, we have unique experience in understanding what tools are needed, and we are invested in developing them with integrity.",
  "Developed with years of piloting experience in Plastic Surgery",
  "Reduces costs to applicants by > 90%",
  "Completely customizable - 100% customizable application content and format, ensuring every program can tailor the process",
  "Quality over Quantity - Central App is designed to focus on meaningful content, distilling the application to less than 5 pages!",
  "Reduced review times - preferred by most users",
  "Demonstrated user-preference in published literature",
];

export default function Soundbites() {
  return (
    <div
      className="pt-4 pb-32 mt-6"
      style={{
        background: `linear-gradient(
        rgba(84, 118, 130, 0) 0%,
        rgba(74, 158, 160, 1) 90%,
        rgb(74, 158, 160) 100%
      )`,
      }}
    >
      <div className="px-4 max-w-7xl mx-auto mt-12 grid grid-cols-3 gap-12 text-white text-[14px]">
        {SOUNDBITES.map((sb) => (
          <div key={sb} className="pt-8 tracking-wider border-t border-white">{sb}</div>
        ))}
      </div>
    </div>
  );
}
