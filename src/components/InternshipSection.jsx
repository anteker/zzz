export default function InternshipSection({ number, title, description, screenshot, kolor }) {
  return (
    <section 
      className="min-h-screen w-full flex flex-col items-center justify-center text-left"
      style={{ backgroundColor: kolor }}
    >
      <h2 className="font-serif text-[50px] text-[#111] mb-6">
        {title}
      </h2>
      
      <p className="font-serif text-2xl text-[#333] max-w-[1250px] leading-[1.2]">
        {description}
      </p>

      <img
        src={screenshot} 
        alt={`Praktyki ${number}`} 
        className="w-full h-auto max-h-[65vh] object-contain transform translate-y-5" 
      />
    </section>
  );
}