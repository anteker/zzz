export default function ProjectCard({ title, description, image }) {
  return (
    <section className="min-h-screen bg-[#d8d8d8] flex items-center justify-center px-6 py-20">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        
        <div className="flex flex-col text-left">
          <h2 className="font-serif text-[50px] text-[#111] mb-8">
            {title}
          </h2>
          <p className="text-2xl text-[#333] max-w-[600px] font-serif">
            {description}
          </p>
        </div>

        <div className="w-full flex justify-end">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto max-h-[70vh] object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}