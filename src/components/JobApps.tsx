"use client";
import Link from "next/link";
import { useState } from "react";
import Form from "@/components/Form";
import Image from "next/image";
import WorkersUrl from "../../public/workers1.png";
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
    <div>
      <h2 id="jobs" className="text-center">
        Available Jobs
      </h2>
      <div className="mx-auto grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-4">
        <Job
          jobTitle="Fiber Optic Installer"
          jobDescription="Install, maintain, and repair fiber optic networks while achieving targets to maximize your income and advance your career."
          imgURL={WorkersUrl}
          imgAlt="Workers installing fiber optic cables"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Fiber Optic Splicer"
          jobDescription="We are seeking a certified Fiber Optic Splicer to join our team, offering a competitive salary for expertly splicing, testing, and maintaining fiber optic cables to ensure high-quality network connections."
          imgURL={WorkersUrl} // Assuming you want to use the same image for all jobs for simplicity
          imgAlt="Fiber Optic Splicer"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Generator & HVAC Technician"
          jobDescription="We are looking for a Mechanical Technician specializing in electrical generators and HVAC, offering performance-based compensation for maintaining and repairing critical equipment to ensure optimal functionality and efficiency."
          imgURL={WorkersUrl} // Replace with the actual image URL if different
          imgAlt="Generator & HVAC Technician"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Fiber Optic Installer Assistant"
          jobDescription="We are hiring a Fiber Optic Installer Assistant to support installation and maintenance tasks, offering performance-based compensation for assisting in the efficient deployment and upkeep of fiber optic networks."
          imgURL={WorkersUrl} // Replace with the actual image URL if different
          imgAlt="Fiber Optic Installer Assistant"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Driver"
          jobDescription="We are seeking a Driver to transport equipment and materials to job sites, offering performance-based compensation for timely and safe deliveries essential to our operations."
          imgURL={WorkersUrl} // Replace with the actual image URL if different
          imgAlt="Driver"
          handleLinkClick={handleLinkClick}
        />

        <Job
          jobTitle="Cell Tower Technician"
          jobDescription="We are looking for a Cell Tower Maintenance Technician to perform routine inspections, repairs, and upgrades on cell towers, offering performance-based compensation for ensuring optimal network performance and reliability."
          imgURL={WorkersUrl} // Replace with the actual image URL if different
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
