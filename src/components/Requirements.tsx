import Image from "next/image";

const Requirements = ({ url, alt }: any) => {
  return (
    <>
      <div className="flex justify-between items-center h-screen px-12 border-t-2 border-b-2 border-white">
        <div className="flex-shrink w-2/3 p-12">
          <h2>Job Requirements</h2>
          <h3>
            <ul className="space-y-4">
              <li>
                <strong>Technical Skills:</strong>
                <br /> Proficiency in installing, maintaining, and
                troubleshooting fiber optic cables and cell tower equipment.
                Some jobs require specific Certifications which we can help
                with.
              </li>
              <li>
                <strong>Physical Fitness:</strong>
                <br /> Good physical condition with the ability to climb towers,
                lift heavy equipment, and work in various weather conditions.
              </li>
              <li>
                <strong>Safety Awareness:</strong>
                <br /> Strong understanding and adherence to industry safety
                standards and protocols to ensure personal and team safety.
              </li>
              <li>
                <strong>Teamwork and Collaboration:</strong>
                <br /> Ability to work well in a team-oriented environment,
                collaborating with colleagues to achieve project goals.
              </li>
            </ul>
          </h3>
        </div>
        <div className="flex-grow p-4">
          <div className="relative w-full h-full">
            <Image
              src={url}
              alt={alt}
              width="600"
              height="334"
              sizes="(min-width: 600px) 100vw, 800px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Requirements;
