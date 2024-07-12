"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="grid grid-cols-3 justify-between items-center h-5/6 px-12">
        <div className="col-span-2 justify-between items-center h-5/6 px-2 pb-12">
          <div className="flex-shrink h-1/3">
            <Image
              src="/logo_blue.svg"
              alt="Blue Logo"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full">
            <h1>
              Your <em style={{ color: "var(--dark-blue)" }}>Future Job</em> Is
              Here
            </h1>
            <p id="desc">
              Our mission is to hire fiber optic and cell tower technicians with
              safe, fair, and professional employment opportunities. We are
              dedicated to fostering a work environment where safety is
              paramount, fairness is upheld, and professionalism is the
              standard.
            </p>
          </div>
          <Button onClick={handleShowModal} />
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-white p-8 rounded-lg z-50">
                <Form
                  showModal={showModal}
                  onClose={handleCloseModal}
                  initialJob={""}
                />
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/worker.png"
            alt="Worker in Blue"
            width={1000}
            height={1000}
            layout="responsive" // Add this line
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
