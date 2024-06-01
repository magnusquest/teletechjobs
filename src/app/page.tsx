import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className=""
          src="/teletech1.png"
          alt="CP Cable & People Company logotipo"
          width="600"
          height="334"
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>

      <div>
        <h2 className="heading-title size-default">
          We, <span className="title-blue">“Cable and People”,</span>
          <br />
          care about our PEOPLE, and care about YOU, because
        </h2>
        <div>
          <div className="widget-container">
            <p>
              We do it <strong>SAFE.</strong> We Look for{" "}
              <strong>PEOPLE</strong> who <strong>CARE</strong> about
              themselves, our <strong>CREWS</strong>, and the{" "}
              <strong>PEOPLE</strong> within the communities we serve.
              <br />
              Because <strong>SAFETY</strong> is a <strong>MUST</strong>, and is
              imprinted in the <strong>DNA</strong> of our company.
            </p>
            <p>
              Our People has been through an extensive training program to
              provide the best and safest service for the community.
            </p>
          </div>
        </div>
        <div className="widget-button">
          <div className="widget-container">
            <div className="button-wrapper">
              <a className="button-link size-sm" href="#jobs">
                <span className="button-content-wrapper">
                  <span className="button-text">View jobs</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs - abstract to components */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Fiber Optic Installer
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Experienced aerial fiber optic installer. Credentials required. Up
            to $30 / Hr plus benefits
          </p>
        </a>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Assistant
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Proactive individuals wishing to learn to be Lineman
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Driver
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            CDL license preferred but regular license accepted. Leaning
            oportunities to be Lineman
          </p>
        </a>
      </div>
    </main>
  );
}
