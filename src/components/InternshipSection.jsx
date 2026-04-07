export default function InternshipSection({ number, title, description, screenshot, kolor }) {
  return (
    <section 
      className="min-h-screen w-full flex flex-col items-center justify-center text-center gap-12"
      style={{ backgroundColor: kolor }}
    >
      <h2 className="font-serif text-[50px] text-[#111] mb-6">
        {title}
      </h2>
      
      <p className="font-serif text-[19px] text-[#333] max-w-[800px] leading-[1.3]">
        {description}
      </p>

      <img
        src={screenshot} 
        alt={`Praktyki ${number}`} 
        className="w-full h-auto max-h-[65vh] object-contain" 
      />
    </section>
  );
}