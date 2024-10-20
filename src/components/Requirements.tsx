import Image from "next/image";
import Checkmark from "@/components/Checkmark";

const Requirements = () => {
  return (
    <>
      <div className="rounded-full items-center h-auto px-12 mx-8 hidden lg:block">
        <h2>Job Requirements</h2>
        <div className="flex w-auto h-auto pt-2">
          <ul className="grid grid-cols-4">
            <li>
              <div className="mx-auto relative h-0 -top-12 w-1/4">
                <Checkmark />
              </div>
              <h3>Technical Skills</h3>
              <p>
                Experience with the specific skill-set required for the job.
                Some jobs require certifications which we are able to assist
                with obtaining
              </p>
            </li>
            <li>
              <div className="mx-auto relative h-0 -top-12 w-1/4">
                <Checkmark />
              </div>
              <h3>Physical Fitness</h3>
              <p>
                Good physical condition with the ability to climb towers, lift
                heavy equipment, and work in various weather conditions
              </p>
            </li>
            <li>
              <div className="mx-auto relative h-0 -top-12 w-1/4">
                <Checkmark />
              </div>
              <h3>Responsibility</h3>
              <p>
                Strong understanding and adherence to industry safety standards
                and protocols to ensure personal and team safety
              </p>
            </li>
            <li>
              <div className="mx-auto relative h-0 -top-12 w-1/4">
                <Checkmark />
              </div>
              <h3>Cooperation</h3>
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
