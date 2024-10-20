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
      <div className="flex justify-between mx-auto h-auto w-auto">
        <div className="mx-auto px-2 w-11/12 h-auto pt-[4vw] pb-2">
          <div className="w-5/6 h-auto pb-[2vw]">
            <Image
              src="/logo_blue.svg"
              alt="Blue Logo"
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
          <div className="w-auto">
            <h1>
              Your <em style={{ color: "var(--dark-blue)" }}>Future Job</em> Is
              Here
            </h1>
            <p id="desc" className="hidden lg:block">
              Our mission is to hire fiber optic and cell tower technicians with
              safe, fair, and professional employment opportunities. We are
              dedicated to fostering a work environment where safety is
              paramount, fairness is upheld, and professionalism is the
              standard.
            </p>
          </div>
          <div className="h-auto w-1/3 hidden lg:block">
            <Button onClick={handleShowModal} />
          </div>
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
        <div className="w-[36vw] hidden lg:block">
          <Image
            src="/worker.png"
            alt="Worker in Blue"
            width={1000}
            height={1000}
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
