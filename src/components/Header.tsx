import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="grid grid-cols-3 w-screen items-center justify-center top-0 left-0 right-0 p-4 z-50">
      <div className="flex items-center justify-center"></div>
      <h1 className="text-center">TeleTechJobs</h1>
      <Button />
    </header>
  );
};

export default Header;
