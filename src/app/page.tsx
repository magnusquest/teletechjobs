import Image from "next/image";
import Hero from "@/components/Hero";
import JobApps from "@/components/JobApps";
import Requirements from "@/components/Requirements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-32">
      <Hero />
      <div className="w-full items-center justify-center align-middle bg-white rounded-3xl py-8">
        <Requirements />
        <JobApps />
      </div>
      <Footer />
    </main>
  );
}
