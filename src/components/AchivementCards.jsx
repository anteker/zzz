export default function AchievementsSection() {
  const osiagniecia = [
    { id: 1, label: "Egzamin ósmoklasisty - Matematyka", percent: 100 },
    { id: 2, label: "INF.03 - egzamin zawodowy programista - praktyczny", percent: 97 },
    { id: 3, label: "INF.04 - egzamin zawodowy programista - praktyczny", percent: 96 },
    { id: 4, label: "Próbna matura - Matematyka", percent: 100 },
  ];

  return (
    <section className="min-h-screen bg-[#b8b8b8] flex items-center justify-center">
      <div className="text-center w-full flex flex-col items-center">
        
        <p className="font-serif text-[50px] text-[#111] whitespace-nowrap mb-8">
          Wyniki moich egzaminów, które uważam za najważniejsze:
          <p><br></br></p>
        </p>
        
        <div className="max-w-[670px] w-full flex flex-col gap-8 mx-auto">
          {osiagniecia.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl flex items-center gap-4 py-2 shadow-sm"
            >
              <span className="font-serif text-[46px] text-[#111] indent-8 min-w-[150px] text-left">
                {item.percent}%
              </span>
              
              <span className="font-serif text-[20px] text-[#444] text-left pr-4">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}