import Image from "next/image";
import Wifi from "@/components/Wifi";

const Hero = ({ url, alt }: any) => {
  return (
    <>
      <div className="flex justify-between items-center h-5/6 px-12">
        <div className="flex-shrink p-4">
          <Wifi />
        </div>
        <div className="flex-grow w-2/3 p-12">
          <h2>Find your next job in the telecom industry</h2>
          <h3>
            At Teletechjobs, our mission is to provide fiber optic and cell
            tower technicians with safe, fair, and professional employment
            opportunities. We are dedicated to fostering a work environment
            where safety is paramount, fairness is upheld, and professionalism
            is the standard. Our commitment is to support our technicians with
            the resources, training, and respect they deserve, ensuring they can
            excel in their careers while contributing to the connectivity of
            tomorrow.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
