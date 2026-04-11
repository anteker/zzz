import grassblock from "../assets/images/zasoby/grassblock.webp";

export default function Minecraft() {
  return (
    <section className="min-h-screen relative bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={grassblock} 
          alt="Blok trawy - screen"
          className="w-full h-full object-cover opacity-90" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center max-w-[1200px]">
        <h2 className="font-serif text-[50px] text-white leading-[2.5]">
          Jak to się zaczęło?
        </h2>
        <p className="font-serif text-2xl text-white leading-[1.5]">
          Jak chyba u każdego - od gier.<br/>
          Od próby ich modyfikowania.<br/>
          Od próby wpływania na przebieg zabawy.<br/>
          Od napisania pierwszych pluginów w grze Minecraft,<br/>
          które zwiększały możliwości mojej postaci<br/>
          poprzez automatyzację działań, i kontrolowanie uprawnień…
        </p>
      </div>
    </section>
  );
}