import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LearnMoreLink({ link, color = "black" }) {
  return (
    <div className={`flex gap-2 items-center text-${color}`}>
      <Link className={`text-wider underline underline-offset-4`} href={link}>
        Learn More
      </Link>
      <ArrowRightIcon className="w-4 h-4" />
    </div>
  );
}
