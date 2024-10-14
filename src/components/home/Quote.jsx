import Link from "next/link";

export default function Quote() {
  return (
    <div className="py-24 bg-[#1A1A1A] text-white flex flex-col items-center">
      <div className="font-semibold text-[32px]">
        “There’s a better way to do it - Find it.”
      </div>
      <div className="font-semibold text-[32px] mt-4 mb-12">Thomas Edison</div>
      <Link href="/contact">
        <button
          className={`rounded-md border-glen border bg-glen text-white py-3 px-4 tracking-wider font-semibold`}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
