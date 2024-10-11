
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/secSection/hero";
import Midsection from "./components/midsection";
import Metallic from "@/assets/metalic.png"
import Preview from "./components/carousel/preview";
import MidSharkSection from "./components/midSharkSection";
import EndSharkSection from "./components/endSharkSection";

import lines from "@/assets/lines.png"
import EmailSection from "./components/emailsection";


export default function Home() {
  return (
    <main className="md:overflow-hidden pb-[2rem]">
      <section className="sticky !z-[100] top-0 bg-[#14093E] h-[4rem] lg:h-[8rem] backdrop-blur-xl">
        <Navbar />
      </section>
      <figure className="absolute z-[-1] hidden md:block mix-blend-screen">
        <Image
          src={Metallic}
          alt="metallic"
          className="object-cover h-[28rem] w-[100dvw]  md:h-[22.5rem] lg:h-[30rem] xl:h-[38rem] 2xl:h-[53rem] max-h-auto lg:object-fill"
        />
      </figure>
      <Hero />
      <Midsection />
      <MidSharkSection />
      <Preview />
      <EndSharkSection />
      <EmailSection />
      <figure className="absolute hidden md:block -bottom-[2rem] right-0 z-[-1]">
        <Image
          src={lines}
          alt="lines"
          className="object-fill h-[25rem] w-[100dvw] "
        />
      </figure>
    </main>
  );
}
