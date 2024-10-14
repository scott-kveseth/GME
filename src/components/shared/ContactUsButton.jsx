import Link from "next/link";

export default function ContactUs({
  bg = "white",
  color = "primary",
  text = "Contact Us",
  link = "#",
}) {
  return (
    <Link href={link}>
      <button
        className={`mt-8 rounded-md text-[18px] bg-${bg} text-${color} py-4 px-6 tracking-wider font-medium`}
      >
        {text}
      </button>
    </Link>
  );
}
