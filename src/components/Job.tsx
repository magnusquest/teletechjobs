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
      <h4>{jobTitle}</h4>
      <span>
        <Image
          src={imgURL}
          alt={imgAlt}
          width={300}
          height={200}
          className="rounded-lg"
        />
        <p>{jobDescription}</p>
      </span>
      <p className="rounded-lg w-32 m-2 p-2 text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors">
        Learn More
      </p>
    </Link>
  );
};

export default Job;
