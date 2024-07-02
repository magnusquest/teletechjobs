import Image from "next/image";
import Checkmark from "@/components/Checkmark";

const Requirements = () => {
  return (
    <>
      <div className="justify-between rounded-full items-center h-auto p-12 mx-24">
        <h2>Job Requirements</h2>
        <div className="flex w-auto">
          <ul className="grid grid-cols-4">
            <li>
              <Checkmark />
              <h3>Technical Skills</h3>
              <br />
              <p>
                Proficiency in installing and maintaining fiber optic cables and
                cell tower equipment. Some jobs require certifications
              </p>
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
