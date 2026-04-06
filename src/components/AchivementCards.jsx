export default function AchievementsSection() {
  const osiagniecia = [
    { id: 1, label: "Egzamin ósmoklasisty - Matematyka", percent: 100 },
    { id: 2, label: "INF.03 - egzamin zawodowy programista - praktyczny", percent: 97 },
    { id: 3, label: "INF.04 - egzamin zawodowy programista - praktyczny", percent: 96 },
    { id: 4, label: "Próbna matura - Matematyka", percent: 100 },
  ];

  return (
    <section className="min-h-screen bg-[#b8b8b8] flex items-center justify-center">
      <div className="max-w-[700px] w-full text-center">
        
        <p className="font-serif text-[50px] text-[#111]">
          Wyniki moich egzaminów:
        </p>
        
        <div className="flex flex-col gap-6">
          {osiagniecia.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-8 rounded-sm flex items-center justify-center gap-4"
            >
              <span className="font-serif text-[46px] text-[#111]">
                {item.percent}%
              </span>
              
              <span className="hidden md:block text-[#A9A9A9] text-4xl font-extralight">—</span>
              
              <span className="font-serif text-[20px] text-[#444]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}