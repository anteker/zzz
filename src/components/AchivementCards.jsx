export default function AchievementsSection() {
  const osiagniecia = [
    { id: 1, label: "Egzamin ósmoklasisty - Matematyka", percent: 100 },
    { id: 2, label: "INF.03 - egzamin zawodowy programista - praktyczny", percent: 97 },
    { id: 3, label: "INF.04 - egzamin zawodowy programista - praktyczny", percent: 96 },
    { id: 4, label: "Próbna matura - Matematyka", percent: 100 },
  ];

  return (
    <section className="min-h-screen bg-[#b8b8b8] flex items-center justify-center">
      <div className="max-w-[650px] w-full text-center">
        
        <p className="font-serif text-[50px] text-[#111]">
          Wyniki moich egzaminów:
        </p>
        <p><br></br></p>
        
        <div className="flex flex-col gap-8">
          {osiagniecia.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-sm flex items-center gap-4"
            >
              <span className="font-serif text-[46px] text-[#111] indent-8">
              {item.percent}%
              </span>
              
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