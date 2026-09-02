import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full h-full min-h-[calc(100vh-100px)] p-6 bg-[#FEFEFE]">
      <div className="relative w-full max-w-[500px] aspect-square animate-fade-in">
        <Image
          src="/logomain.jpg"
          alt="The English Master Main Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
