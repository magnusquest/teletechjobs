import Image from "next/image";
import Hero from "@/components/Hero";
import JobApps from "@/components/JobApps";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-0">
      <Hero url="/teletech.png" alt="Teletechjobs Logo" left={true} />
      <Hero url="/teletech.png" alt="Teletechjobs Logo" left={false} />
      <JobApps />
    </main>
  );
}
