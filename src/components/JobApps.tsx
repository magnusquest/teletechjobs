"use client";
import Link from "next/link";
import { useState } from "react";
import Form from "@/components/Form";
import Image from "next/image";

const JobApps = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleLinkClick = (job: string) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <div className="justify-center">
      <h2 id="jobs" className="text-center">
        Available Jobs
      </h2>
      <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-4">
        <div className="flex-grow p-4">
          <div className="relative w-full h-full">
            <Image
              src={"/workers1.png"}
              alt={"placeholder"}
              width="600"
              height="334"
              sizes="(min-width: 600px) 100vw, 800px"
            />
          </div>
        </div>
        <Link
          href="#jobs"
          onClick={() => handleLinkClick("Fiber Optic Installer")}
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4 className="underline">Fiber Optic Installer</h4>
          Install, maintain, and repair fiber optic networks while achieving
          targets to maximize your income and advance your career
        </Link>

        <Link
          href="#jobs"
          onClick={() => handleLinkClick("Fiber Optic Splicer")}
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4 className="underline">Fiber Optic Splicer</h4>
          We are seeking a certified Fiber Optic Splicer to join our team,
          offering a competitive salary for expertly splicing, testing, and
          maintaining fiber optic cables to ensure high-quality network
          connections
        </Link>

        <Link
          href="#jobs"
          onClick={() => handleLinkClick("Generator & HVAC Technician")}
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4 className="underline">Generator & HVAC Technician</h4>
          We are looking for a Mechanical Technician specializing in electrical
          generators and HVAC, offering performance-based compensation for
          maintaining and repairing critical equipment to ensure optimal
          functionality and efficiency
        </Link>

        <Link
          href="#jobs"
          onClick={() => handleLinkClick("Fiber Optic Installer Assistant")}
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4 className="underline">Fiber Optic Installer Assistant</h4>
          We are hiring a Fiber Optic Installer Assistant to support
          installation and maintenance tasks, offering performance-based
          compensation for assisting in the efficient deployment and upkeep of
          fiber optic networks
        </Link>

        <Link
          href="#jobs"
          onClick={() => handleLinkClick("Driver")}
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4 className="underline">Driver</h4>
          We are seeking a Driver to transport equipment and materials to job
          sites, offering performance-based compensation for timely and safe
          deliveries essential to our operations
        </Link>

        <Link
          href="#jobs"
          onClick={() => handleLinkClick("Cell Tower Technician")}
          className="p-4 rounded-lg items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 w-full h-full text-white font-semibold hover:from-blue-900 hover:to-blue-700 transition-colors"
        >
          <h4 className="underline">Cell Tower Technician</h4>
          We are looking for a Cell Tower Maintenance Technician to perform
          routine inspections, repairs, and upgrades on cell towers, offering
          performance-based compensation for ensuring optimal network
          performance and reliability
        </Link>
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
