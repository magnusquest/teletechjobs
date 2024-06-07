import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="/apply"
      className="rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-2/5 h-12 text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
    >
      Apply Now
    </Link>
  );
};

export default Button;
