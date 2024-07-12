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
    <Link
      className="rounded-lg w-auto h-156 text-center"
      href="#jobs"
      onClick={() => handleLinkClick(jobTitle)}
    >
      <h3>{jobTitle}</h3>
      <div
        id="job"
        className="flex flex-col justify-between p-4 border-2 border-black rounded-md"
      >
        <Image
          src={imgURL}
          alt={imgAlt}
          width={300}
          height={200}
          className="rounded-lg border-2 border-black shadow-md shadow-black mx-auto" // Modified border thickness to 2
        />
        <p className="m-2">{jobDescription}</p>
        <div className="relative bottom-0 grid col-span-3">
          <div
            id="button"
            className="ml-auto col-end-4 rounded-lg w-32 p-2 text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
          >
            Learn More
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
