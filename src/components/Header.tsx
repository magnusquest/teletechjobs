"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="grid grid-cols-3 w-screen items-center top-0 left-0 right-0 p-4 z-50">
      <h1 className="text-right">TeleTechJobs</h1>
      <div></div>
      <div className="flex items-center justify-center">
        <Button onClick={handleShowModal} />
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg z-50">
              <Form showModal={showModal} onClose={handleCloseModal} initialJob={""} />
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
