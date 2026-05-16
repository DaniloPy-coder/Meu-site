"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <main
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center px-4"
    >
      <div className="animate-flutter flex justify-center items-center">
        <div className="w-87.5 h-87.5 relative rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
          <Image
            src="/ft perfil.jpg"
            alt="Foto de perfil"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="text-6xl md:text-[3.5rem] text-primary font-bold my-5">
        Danilo José
      </h1>
      <p className="text-2xl text-ofcourse">Desenvolvedor Web</p>
      <a
        href="https://drive.google.com/file/d/1aKrt3B9ryrO81x3sk-bnMLECTfiaphSr/view?usp=sharing"
        target="_blank"
        className="mt-5 px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(139,92,246,0.5)]"
        download
      >
        Baixar Currículo
      </a>
    </main>
  );
};

export default Hero;
