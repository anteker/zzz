import indigomc from "../assets/images/zasoby/indigomc.webp";

export default function Serwer() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={indigomc} 
          alt="indigomc.pl tło" 
          className="w-full h-full object-fill" 
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[800px] px-6 text-left translate-y-[5%] translate-x-[-30%]">
        <h2 className="font-serif text-[50px] text-white mb-6">
          Pierwsza poważna robota?
        </h2>
        
        <p className="font-serif text-2xl text-white">
          W pełni responsywna strona internetowa serwera Minecraft{" "}
          <a 
            href="https://indigomc.pl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#633D89] underline underline-offset-4 decoration-[#633D89] hover:text-blue-300 hover:decoration-blue-300 transition-all">
            indigomc.pl
          </a>.
          Jest dla mnie wyjątkowa ponieważ udało się mi zintegrować na niej płatności
          systemu PayByLink. Realne pieniądze gracz może zamienić na doładowania wirtualnej waluty,
          za którą z kolei może nabywać określone usługi w grze. Każda transakcja przechodzi przez indywidualną
          bramkę płatniczą i jest oczywiście w pełni szyfrowana.<br/><br/>
          Strona ma dodatkowo rozbudowaną bazę danych do przechowywania informacji o graczach,
          płatnościach oraz do prowadzenia wszelkich statystyk.
          Tworzenie jej pozwoliło mi praktycznie rozwijać umiejętności programistyczne,
          poznawać Javę oraz konfigurować nowe dla mnie środowisko Bukkit API. Pisząc tę stronę mogłem 
          jednocześnie łączyć rozwój backendu serwera z nauką integracji pluginów i praktycznym zastosowaniem języka Java.
        </p>
      </div>
    </section>
  );
}