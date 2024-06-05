import Link from "next/link";

const Header = () => {
  return (
    <header className="grid grid-cols-3 w-screen items-center justify-center sticky top-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-500 to-slate-800 z-50">
      <div className="flex items-center justify-center"></div>
      <h1 className="text-center">TeleTechJobs</h1>
      <Link
        href="/apply"
        className="rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 w-2/5 h-12 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-colors"
      >
        Apply Now
      </Link>
    </header>
  );
};

export default Header;
