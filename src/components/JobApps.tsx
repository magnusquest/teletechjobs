"use client";
import Link from "next/link";
import { useState } from "react";
import Form from "@/components/Form";
import Image from "next/image";
import cellTech from "../../public/cell-tech.png";
import driver from "../../public/driver.png";
import fiberOpticInstaller from "../../public/fiber-optic-installer.png";
import fiberOpticSplicer from "../../public/fiber-optic-splicer.png";
import fiberOpticAssistant from "../../public/fiber-optic-assistant.png";
import genHvacTech from "../../public/gen-hvac-tech.png";
import Job from "@/components/Job";
import { JobProps } from "@/components/Job";

const JobApps = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleLinkClick = (job: string) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <div className="mx-[4vw]">
      <h2 id="jobs" className="text-center hidden lg:block">
        Available Jobs
      </h2>
      <div className="mx-auto grid lg:grid-cols-3 lg:text-left gap-4">
        <Job
          jobTitle="Fiber Optic Installer"
          jobDescription="Install, maintain, and repair fiber optic networks while advancing your career."
          imgURL={fiberOpticInstaller}
          imgAlt="Workers installing fiber optic cables"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Fiber Optic Splicer"
          jobDescription="Splice, test, and maintain fiber optic cables to ensure high-quality network connections."
          imgURL={fiberOpticSplicer}
          imgAlt="Fiber Optic Splicer"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Mechanical Technician"
          jobDescription="We are looking for a Mechanical Technician specializing in electrical generators and HVAC."
          imgURL={genHvacTech}
          imgAlt="Generator & HVAC Technician"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Assistant Technician"
          jobDescription="Install and maintain fiber optics, assisting in the deployment and upkeep of fiber optic networks."
          imgURL={fiberOpticAssistant}
          imgAlt="Fiber Optic Installer Assistant"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Driver"
          jobDescription="Transport equipment and materials to job sites. Timely and safe deliveries essential to our operations."
          imgURL={driver}
          imgAlt="Driver"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Cell Tower Technician"
          jobDescription="Perform inspections, repairs, and upgrades on cell towers, ensuring optimal network performance."
          imgURL={cellTech}
          imgAlt="Cell Tower Technician"
          handleLinkClick={handleLinkClick}
        />
      </div>
      <Form
        showModal={showModal}
        onClose={() => setShowModal(false)}
        initialJob={selectedJob}
      />
    </div>
  );
};

export default JobApps;
