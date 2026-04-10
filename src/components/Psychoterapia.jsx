import psycho from "../assets/images/psycho.png";

export default function Psychoterapia() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      
      {/* Tło */}
      <div className="absolute inset-0">
        <img 
          src={psycho} 
          alt="psychoterapia tło" 
          className="w-full h-full object-fill" 
        />
        {/* Warstwa przyciemniająca - opcjonalnie zwiększ opacity jeśli tekst jest nieczytelny */}
        <div className="absolute inset-0" />
      </div>

      {/* Kontener tekstu */}
      <div className="relative z-10 max-w-[820px] px-6 text-left flex flex-col justify-center items-left min-h-screen translate-y-[30%]">
        
        <p className="font-serif text-[50px] text-[#957F67] mb-6">
          Zwykłe strony internetowe?
        </p>
        
<p className="font-serif text-2xl text-[#957F67]">
    Żaden problem.
    Czy to strona tartaku z bazą danych i obsługą sprzedażową, czy też portal psychoterapeuty z przekierowaniami do {" "}
      <a 
    href="https://znanylekarz.pl" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#11705D] underline underline-offset-4 decoration-[#11705D] hover:text-blue-300 hover:decoration-blue-300 transition-all"
  >
    ZnanyLekarz.pl
  </a>.
    <br/>Piszę je w Next.js z wykorzystaniem server-side rendering (SSR), dynamicznego generowania meta tagów, optymalizacji wydajności oraz przyjaznej struktury pod kątem SEO.
</p>
      </div>
    </section>
  );
}