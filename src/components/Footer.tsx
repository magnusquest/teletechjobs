import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 p-4 text-white bottom-0">
      <div className="grid grid-cols-3 items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/wifi-2.svg"
            alt="Placeholder Image"
            width={100}
            height={100}
          />
        </div>
        <div>{/* Empty div as per instructions */}</div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-left">Contact Us</h3>
          <p className="text-left">Email: contact@teletechjobs.com</p>
          <p className="text-left">Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
