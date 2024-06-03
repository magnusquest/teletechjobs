"use client";
import Image from "next/image";

const Hero = ({ url, alt, left }: any) => {
  return (
    <>
      <div className="flex items-center">
        {left && (
          <div>
            <Image
              className=""
              src={url}
              alt={alt}
              width="600"
              height="334"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        )}

        <div>
          <h2 className="heading-title size-default">
            We specialize in recruiting and hiring for fiber optic installers.
          </h2>
          <p>Safety is our number one priority.</p>
          {/* View jobs */}
        </div>
        {!left && (
          <div>
            <Image
              className=""
              src={url}
              alt={alt}
              width="600"
              height="334"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
