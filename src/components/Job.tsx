import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
  return (
    <Link href="#jobs" onClick={() => handleLinkClick(jobTitle)}>
      <h3>{jobTitle}</h3>
      <div id="job" className="flex lg:flex-col p-[1vw]">
        <div className="min-w-52 lg:h-auto lg:w-auto">
          <Image
            src={imgURL}
            alt={imgAlt}
            width={200}
            height={200}
            className="rounded-lg border-2 border-black shadow-md shadow-black mx-auto"
            layout="responsive"
          />
        </div>
        <p className="min-h-20 m-2 hidden lg:block">{jobDescription}</p>
        <div>
          <p className="h-12 m-[2vw] lg:hidden">{jobDescription}</p>
          <div
            id="button"
            className="ml-auto mr-6 rounded-lg w-36 p-2 text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
          >
            Learn More
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
