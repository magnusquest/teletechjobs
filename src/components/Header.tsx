import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="grid grid-cols-3 w-screen items-center top-0 left-0 right-0 p-4 z-50">
      <h1 className="text-right">TeleTechJobs</h1>
      <div></div>
      <div className="flex items-center justify-center">
        <Button />
      </div>
    </header>
  );
};

export default Header;
