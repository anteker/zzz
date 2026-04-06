export default function InternshipSection({ number, description, screenshot, kolor}) {
  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center "
      style={{ backgroundColor: kolor }}
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        
        <div className="w-full flex flex-col items-center ">
          <h2 className="font-serif text-6xl text-[#111]">
            Czas praktyk szkolnych był już trudniejszy.
          </h2>
          
          <p className="font-serif text-2xl text-[#333] max-w-[800px]">
            {description}
          </p>
        </div>

        <div>
          <div>
            <img 
              src={screenshot} 
              alt={`Praktyki ${number}`} 
              className="w-full h-auto max-h-[65vh] block object-contain" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}