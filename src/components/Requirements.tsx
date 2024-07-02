import Image from "next/image";

const Requirements = () => {
  return (
    <>
      <div className="justify-between rounded-full bg-slate-200 items-center h-screen pb-12">
        <h2>Job Requirements</h2>
        <div className="flex w-auto">
          <ul className="space-y-4">
            <li>
              <strong>Technical Skills</strong>
              <br /> Proficiency in installing and maintaining fiber optic
              cables and cell tower equipment. Some jobs require certifications
            </li>
            <li>
              <strong>Physical Fitness</strong>
              <br /> Good physical condition with the ability to climb towers,
              lift heavy equipment, and work in various weather conditions
            </li>
            <li>
              <strong>Safety Awareness</strong>
              <br /> Strong understanding and adherence to industry safety
              standards and protocols to ensure personal and team safety
            </li>
            <li>
              <strong>Teamwork and Collaboration</strong>
              <br /> Ability to work well in a team-oriented environment,
              collaborating with colleagues to achieve project goals
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Requirements;
