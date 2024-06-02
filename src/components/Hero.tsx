"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex items-center">
        <div>
          <Image
            className=""
            src="/teletech2.png"
            alt="Teletechjobs Logo"
            width="600"
            height="334"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <div>
          <h2 className="heading-title size-default">
            We specialize in recruiting and hiring for fiber optic installers.
          </h2>
          <p>Safety is our number one priority.</p>
          {/* View jobs */}
        </div>
      </div>
    </>
  );
};

export default Hero;
