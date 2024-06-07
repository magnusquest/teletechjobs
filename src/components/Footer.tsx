import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full p-4 text-white bottom-0">
      <div className="grid grid-cols-3 items-center justify-center">
        <div className="flex items-center justify-center">
          <p>Any Questions? Contact Us!</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-left">info@teletechjobs.us</p>
        </div>
        <div>
          <p className="text-left">(123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
