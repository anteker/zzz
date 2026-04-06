import plugin from "../assets/images/plugin.png";
import screen from "../assets/images/screen.png";

export function FinaleSection({ certificates = [] }) {
  return (
    <section className="min-h-screen bg-[#c0392b] flex items-center justify-center px-6 py-20">
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-16 text-center">
        
        <div className="max-w-[1300px]">
          <h2 className="font-serif text-[50px] text-white leading-[1.2] mb-6">
            CZERWONY - to kolor paska na każdym świadectwie podczas mojej nauki w technikum.
            <br/><br/>Co roku byłem laureatem stypendium starosty za wybitne osiągnięcia w nauce.
          </h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 w-full">
          {certificates.map((img, index) => (
            <div 
              key={index} 
              className="shadow-[0_25px_50px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden w-full bg-white/10"
            >
              <img 
                src={img} 
                alt={`Świadectwo ${index + 1}`}
                className="w-full h-auto object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MinecraftSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={plugin} 
          alt="Plugin minecraft"
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center max-w-[720px]">
        <h2 className="font-serif text-6xl text-white mb-6">
          Jak to się zaczęło?<br/><br/>
        </h2>
        <p className="font-serif text-5xl text-white leading-[1.2]">
          Jak chyba u każdego dziecka. Od gier, od tworzenia pluginów w Minecraft.
        </p>
      </div>
    </section>
  );
}

export function ServerSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-10 text-center">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={screen} 
          alt="indigomc.pl tło" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[800px]">
        <p className="font-serif text-6xl text-white leading-[1.2]">
          Potem było stworzenie własnego serwera do gier.
        </p>
      </div>
    </section>
  );
}