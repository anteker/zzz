import psycho from "../assets/images/psycho.png";

export default function Psychoterapia() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      
      {/* Tło */}
      <div className="absolute inset-0">
        <img 
          src={psycho} 
          alt="psychoterapia tło" 
          className="w-full h-full object-fill opacity-90" 
        />
        {/* Warstwa przyciemniająca - opcjonalnie zwiększ opacity jeśli tekst jest nieczytelny */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Kontener tekstu */}
      <div className="relative z-10 max-w-[800px] px-6 text-left flex flex-col justify-center items-center min-h-screen translate-y-[30%]">
        
        <h2 className="font-serif text-[50px] text-white mb-6">
          Zwykłe strona internetowe?
        </h2>
        
<p className="font-serif text-2xl text-white">
    Żaden problem.
    Czy to strona tartaku z bazą danych i obsługą sprzedażową, czy też portal psychoterapeuty z przekierowaniami do ZnanyLekarz.pl.
    Piszę ją w Next.js z wykorzystaniem server-side rendering (SSR), dynamicznego generowania meta tagów, optymalizacji wydajności oraz przyjaznej struktury pod kątem SEO.
</p>
      </div>
    </section>
  );
}