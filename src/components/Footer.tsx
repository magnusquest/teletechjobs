import Image from "next/image";
import Email from "@/components/Email";
import Phone from "@/components/Phone";

const Footer = () => {
  return (
    <footer className="w-screen h-36 py-4 px-12">
      <div className="h-1/3" />
      <div className="grid grid-cols-2 items-center justify-center px-24">
        <div className="flex items-center justify-center">
          <Email />
          <h4>info@teletechjobs.us</h4>
        </div>
        <div className="flex items-center justify-center">
          <Phone />
          <h4>(123) 456-7890</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
