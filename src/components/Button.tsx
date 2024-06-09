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
      className="rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-2/5 h-12 text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
    >
      Apply Now
    </Link>
  );
};

export default Button;
