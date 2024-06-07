import Image from "next/image";
import Hero from "@/components/Hero";
import JobApps from "@/components/JobApps";
import Header from "@/components/Header";
import Requirements from "@/components/Requirements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[6vw]">
      <Header />
      <Hero url="/wifi-1.svg" alt="Teletechjobs Logo" />
      <Requirements url="/workers1.png" alt="Workers" />
      <JobApps />
      <Footer />
    </main>
  );
}
