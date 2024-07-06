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
      className="rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 max-w-96 h-24 text-white font-semibold hover:from-blue-900 hover:to-blue-700 hover:italic hover:underline transition-colors"
      style={{ fontSize: "2.4rem" }}
    >
      Apply Now!
    </Link>
  );
};

export default Button;
