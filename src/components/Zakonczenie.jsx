import zakonczenie from "../assets/images/zasoby/zakonczenie.png";

export default function Zakonczenie() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={zakonczenie} 
          alt="zakonczenie tło" 
          className="w-full h-full object-fill"/>
        <div className="absolute inset-0"/>
      </div>
    </section>
  );
}