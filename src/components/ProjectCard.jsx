export default function ProjectCard({ title, description, image }) {
  return (
    <section className="min-h-screen bg-[#d8d8d8] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col text-left">
          <h2 className="font-serif text-6xl text-[#111] mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[#333] leading-relaxed">
            {description}
          </p>
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full"
        />
      </div>
    </section>
  );
}