import grassblock from "../assets/images/grassblock.png";
import indigomc from "../assets/images/indigomc.png";

export function FinaleSection({ certificates = [] }) {
  return (
    <section className="min-h-screen bg-[#c0392b] flex items-center justify-center px-6 py-20">
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-16 text-center">
        
        <div className="max-w-[1300px]">
          <h2 className="font-serif text-[50px] text-white leading-[1.2] mb-6">
            CZERWONY - to kolor paska na każdym świadectwie podczas mojej nauki w technikum.
            <br/><br/>Co roku byłem też laureatem stypendium starosty za wybitne osiągnięcia w nauce.
          </h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 w-full">
          {certificates.map((img, index) => (
            <div 
              key={index} 
              className="rounded-lg w-[200px] bg-white/10"
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
          src={grassblock} 
          alt="Blok trawy - screen"
          className="w-full h-full object-cover opacity-90" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center max-w-[1200px]">
        <h2 className="font-serif text-[50px] text-white leading-[2.5]">
          Jak to się zaczęło?<br/>
        </h2>
        <p className="font-serif text-2xl text-white leading-[1.5]">
          Jak chyba u każdego - od gier.
        </p>
        <p className="font-serif text-2xl text-white leading-[1.5]">
          Od próby ich modyfikowania.
        </p>
                <p className="font-serif text-2xl text-white leading-[1.5]">
          Od próby wpływania na przebieg zabawy.
        </p>
                <p className="font-serif text-2xl text-white leading-[1.5]">
          Od napisania pierwszych pluginów w grze Minecraft,
        </p>
        <p className="font-serif text-2xl text-white leading-[1.5]">
          które zwiększały możliwości mojej postaci 
        </p>
        <p className="font-serif text-2xl text-white leading-[1.5]">
          poprzez automatyzację działań, i kontrolowanie uprawnień…
        </p>
      </div>
    </section>
  );
}
export function ServerSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      
      {/* Tło */}
      <div className="absolute inset-0">
        <img 
          src={indigomc} 
          alt="indigomc.pl tło" 
          className="w-full h-full object-fill opacity-90" 
        />
        {/* Warstwa przyciemniająca - opcjonalnie zwiększ opacity jeśli tekst jest nieczytelny */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Kontener tekstu */}
      <div className="relative z-10 max-w-[800px] px-6 text-left 
                      /* TUTAJ STERUJESZ POZYCJĄ: */
                      translate-y-[5%]  /* Przesunięcie góra/dół (procentowo lepiej reaguje) */
                      translate-x-[-25%]   /* Przesunięcie lewo/prawo jeśli trzeba */">
        
        <h2 className="font-serif text-[50px] text-white mb-6">
          Jak to się zaczęło?
        </h2>
        
<p className="font-serif text-2xl text-white">
  W pełni responsywna strona internetowa serwera Minecraft{" "}
  <a 
    href="https://indigomc.pl" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-400 underline underline-offset-4 decoration-blue-400/50 hover:text-blue-300 hover:decoration-blue-300 transition-all"
  >
    indigomc.pl
  </a>.
  Jest dla mnie wyjątkowa, ponieważ udało mi się zintegrować na niej płatności systemu PayByLink. 
  Realne pieniądze gracz może zamienić na doładowania wirtualnej waluty, za którą z kolei może 
  nabywać określone usługi w grze. Każda transakcja przechodzi przez indywidualną bramkę płatniczą 
  i jest w pełni szyfrowana.
  <br /><br />
  Strona posiada rozbudowaną bazę danych do przechowywania informacji o graczach i płatnościach. 
  Tworzenie jej pozwoliło mi rozwijać umiejętności programistyczne, poznawać Javę oraz konfigurować 
  środowisko Bukkit API, łącząc rozwój backendu z nauką integracji pluginów.
</p>
      </div>
    </section>
  );
}