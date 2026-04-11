export default function Swiadectwo({ certyfikaty = [] }) {
  return (
    <section className="min-h-screen bg-[#c0392b] flex items-center justify-center px-6 py-20">
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-16 text-center">
        
        <div className="max-w-[1300px]">
          <h2 className="font-serif text-[50px] text-white leading-[1.2]">
            CZERWONY - to kolor paska na każdym świadectwie podczas mojej nauki w technikum.
            <br/><br/>Co roku byłem też laureatem stypendium starosty za wybitne osiągnięcia w nauce.
          </h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 w-full">
          {certyfikaty.map((img, i) => (
            <div 
              key={i} 
              className="rounded-lg w-[200px]"
              style={{ 
                opacity: 0,
                animation: `zdjeciaAnimacja 0.6s ease forwards ${i * 0.1}s` 
              }}
            >
              <img 
                src={img} 
                alt={`Świadectwo ${i + 1}`}
                className="w-full h-auto object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}