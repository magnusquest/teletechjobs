import { useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface JobProps {
  jobTitle: string;
  jobDescription: string;
  imgURL: StaticImageData;
  imgAlt: string;
  handleLinkClick: (jobTitle: string) => void;
}

const Job: React.FC<JobProps> = ({
  jobTitle,
  jobDescription,
  imgURL,
  imgAlt,
  handleLinkClick,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const largeScreenQuery = window.matchMedia("(min-width: 1024px)");
    const mediumScreenQuery = window.matchMedia("(min-width: 768px)");

    const handleLargeScreenChange = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches);
    };

    const handleMediumScreenChange = (event: MediaQueryListEvent) => {
      setIsMediumScreen(event.matches);
    };

    setIsLargeScreen(largeScreenQuery.matches);
    setIsMediumScreen(mediumScreenQuery.matches);

    largeScreenQuery.addEventListener("change", handleLargeScreenChange);
    mediumScreenQuery.addEventListener("change", handleMediumScreenChange);

    return () => {
      largeScreenQuery.removeEventListener("change", handleLargeScreenChange);
      mediumScreenQuery.removeEventListener("change", handleMediumScreenChange);
    };
  }, []);

  return (
    <Link
      className="w-full"
      href="#jobs"
      onClick={() => handleLinkClick(jobTitle)}
    >
      <h3>{jobTitle}</h3>
      <div id="job" className="flex lg:flex-col w-auto my-6 justify-end">
        <Image
          src={imgURL}
          alt={imgAlt}
          width={isLargeScreen ? 400 : isMediumScreen ? 300 : 120}
          height={isLargeScreen ? 400 : isMediumScreen ? 300 : 120}
          className="rounded-lg border-2 border-black shadow-md shadow-black mt-0 mb-auto"
        />
        <p className="h-auto w-auto m-2 hidden lg:block">{jobDescription}</p>
        <div className="mx-[2vw] w-auto">
          <p className="bottom-0 h-auto w-auto lg:hidden">{jobDescription}</p>
          <div
            id="button"
            className="rounded-lg w-auto p-2 m-2 text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
          >
            Learn More
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
