import Image from "next/image";
import Checkmark from "@/components/Checkmark";

const Requirements = () => {
  return (
    <>
      <div className="justify-between rounded-full items-center h-auto p-12 mx-24">
        <h2>Job Requirements</h2>
        <div className="flex w-auto h-auto">
          <ul className="grid grid-cols-4">
            <li>
              <div className="mx-auto relative h-6 -top-12 w-1/3">
                <Checkmark />
              </div>
              <h3>Technical Skills</h3>
              <br />
              <p>
                Proficiency in installing and maintaining fiber optic cables and
                cell tower equipment. Some jobs require certifications
              </p>
            </li>
            <li>
              <div className="mx-auto relative h-6 -top-12 w-1/3">
                <Checkmark />
              </div>
              <h3>Physical Fitness</h3>
              <br />
              <p>
                Good physical condition with the ability to climb towers, lift
                heavy equipment, and work in various weather conditions
              </p>
            </li>
            <li>
              <div className="mx-auto relative h-6 -top-12 w-1/3">
                <Checkmark />
              </div>
              <h3>Safety Awareness</h3>
              <br />
              <p>
                Strong understanding and adherence to industry safety standards
                and protocols to ensure personal and team safety
              </p>
            </li>
            <li>
              <div className="mx-auto relative h-6 -top-12 w-1/3">
                <Checkmark />
              </div>
              <h3>Teamwork and Collaboration</h3>
              <br />
              <p>
                Ability to work well in a team-oriented environment,
                collaborating with colleagues to achieve project goals
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Requirements;
