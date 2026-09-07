import Image from "next/image";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex-1 flex flex-col items-center justify-center w-full min-h-[calc(100vh-100px)] p-6 bg-[#FEFEFE]">
      <Reveal animation="scale-up" className="relative w-full max-w-[500px] aspect-square">
        <Image
          src="/logomain.jpg"
          alt="The English Master Main Logo"
          fill
          className="object-contain"
          priority
        />
      </Reveal>
      {/* Seamless gradient fade to the next section (slate-50) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
    </section>
  );
}
