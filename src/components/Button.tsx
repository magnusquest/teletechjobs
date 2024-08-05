import Link from "next/link";

import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <Link
      href="#jobs"
      onClick={onClick}
      className="max-w-[24vw] h-[6vw] rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold hover:from-blue-900 hover:to-blue-700 hover:underline transition-colors"
      id="button"
      style={{ fontSize: "2.4vw" }}
    >
      Apply Now!
    </Link>
  );
};

export default Button;
