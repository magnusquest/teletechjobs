"use client";
import Link from "next/link";

const JobApps = () => {
  return (
    <div className="mb-32 justify-center">
      <h2 className="text-center">Available Jobs</h2>
      <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-4">
        <Link
          href=""
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4>Assistant</h4>
          Proactive individuals wishing to learn to be Lineman
        </Link>
        <Link
          href=""
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4>Assistant</h4>
          Proactive individuals wishing to learn to be Lineman
        </Link>
        <Link
          href=""
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4>Assistant</h4>
          Proactive individuals wishing to learn to be Lineman
        </Link>
        <Link
          href=""
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4>Assistant</h4>
          Proactive individuals wishing to learn to be Lineman
        </Link>
      </div>
    </div>
  );
};

export default JobApps;
