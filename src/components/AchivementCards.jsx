export default function AchievementsSection() {
  const osiagniecia = [
    { id: 1, label: "Egzamin ósmoklasisty - Matematyka", percent: 100 },
    { id: 2, label: "INF.03 - egzamin zawodowy praktyczny", percent: 97 },
    { id: 3, label: "INF.04 - egzamin zawodowy praktyczny", percent: 96 },
    { id: 4, label: "Próbna matura - Matematyka", percent: 100 },
  ];

  return (
    <section className="min-h-screen bg-[#b8b8b8] flex items-center justify-center">
      <div className="max-w-[850px] w-full text-center">
        
        <h2 className="font-serif text-6xl text-[#111]">
          Wyniki egzaminów<br/><br/>
        </h2>
        
        <div className="flex flex-col gap-6">
          {osiagniecia.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-8 rounded-sm shadow-xl flex md:flex-row items-center justify-center gap-4"
            >
              <span className="font-serif text-[clamp(32px,4vw,46px)] text-[#111]">
                {item.percent}%
              </span>
              
              <span className="hidden md:block text-[#111]/20 text-4xl font-extralight">—</span>
              
              <span className="text-[clamp(16px,1.8vw,20px)] text-[#444]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}