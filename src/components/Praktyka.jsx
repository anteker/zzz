export default function Praktyka({ number, title, description, screenshot, kolor, tekstkolor}) {
  return (
    <section 
      className="min-h-screen w-full flex flex-col items-center justify-center text-left"
      style={{ backgroundColor: kolor }}>
      <h2 
        className="font-serif text-[50px] mb-6" 
        style={{ color: tekstkolor }}>
        {title}
      </h2>
      
      <p 
        className="font-serif text-2xl max-w-[1245px] leading-[1.2]" 
        style={{ color: tekstkolor }}>
        {description}
      </p>

      <img
        src={screenshot} 
        alt={`Praktyki ${number}`} 
        className="w-full h-auto max-h-[65vh] object-contain transform translate-y-5" />
    </section>
  );
}