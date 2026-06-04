import Image from "next/image";

const Header = () => (
  <header className=" w-full z-20 relative py-4 px-16  bg-[#f8f9f8]  backdrop-blur-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center w-full">

    <Image src="/Aisthesis.png" alt="Aisthésis Logo" width={150} height={40} className="w-20" />
    <nav>
      <ul className="flex items-center gap-8 text-sm text-gray-700">
        <li><a href="#" className="border-b-2 border-[#274408c] pb-1 text-[#274408c] font-semibold">A Clínica</a></li>
        <li><a href="#" className="hover:text-[#5c5e64] transition-colors">Tratamentos</a></li>
        <li><a href="#" className="hover:text-[#5c5e64] transition-colors">Pilates</a></li>
        <li><a href="#" className="hover:text-[#5c5e64] transition-colors">Profissionais</a></li>
        <li><a href="#" className="hover:text-[#5c5e64] transition-colors">Blog</a></li>
      </ul>
    </nav>
    <a href="#" className="bg-[#0FACBE] text-white px-8 py-3 rounded-full hover:bg-[#0FACBE]/70 transition-colors font-semibold text-sm">
      Agendar
    </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative h-[calc(100dvh-90px)] flex items-center justify-center text-black w-full bg-white">
    <div className="absolute inset-0 w-full object-cover z-0">
      <Image
        src="/background.jpg"
        alt="Mulher recebendo tratamento de limpeza de pele."
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 via-60% to-80% to-transparent"></div>
    </div>
    <div className="z-10 flex flex-col items-start text-left max-w-6xl w-full px-8">
        <div className="bg-blue-600/80 text-white px-4 py-1 rounded-full text-sm mb-4 flex items-center gap-2">
            <span className="text-lg">✨</span>
            <span>NOVO CURSO — Limpeza de Pele</span>
        </div>
        <h1 className="text-6xl font-bold mb-4 max-w-2xl text-[#1B2D65] leading-tight">Realce sua beleza. Confie em quem cuida.</h1>
        <p className="text-lg mb-8 max-w-md">
            Um refúgio de tranquilidade onde a ciência estética encontra o cuidado humano para revelar sua melhor versão.
        </p>
        <div className="flex gap-4">
            <a href="#" className="bg-cyan-500 text-white px-8 py-4 rounded-full hover:bg-cyan-600 transition-colors font-semibold">
                Agendar consulta
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors font-semibold">
                Curso limpeza de pele
            </a>
        </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-white/90 text-black px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
            <span className="text-yellow-500 text-xl">⭐</span>
            <span className="font-semibold">4.9 — +500 pacientes</span>
            <span className="text-gray-500 text-sm">ATENDIDAS COM EXCELÊNCIA</span>
        </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
