import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-screen h-64 p-4 text-white">
      <div className="h-2/3" />
      <div className="grid grid-cols-3 items-end justify-end">
        <div className="text-right">
          <p>Any Questions? Contact Us!</p>
        </div>
        <div className="text-center">
          <p>info@teletechjobs.us</p>
        </div>
        <div className="text-left">
          <p>(123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
