const LANGUAGES = [
  { name: "Java", icon: "devicon-java-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Swift", icon: "devicon-swift-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },
  { name: "Git", icon: "devicon-git-plain" }
];

export default function LanguagesSection() {
  return (
    <section className="min-h-screen bg-[#d0d0d0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        
        <h2 className="font-serif text-[40px] md:text-[52px] text-[#111] leading-tight mb-16 ">
          Oprócz języka polskiego i angielskiego doskonalę swoje umiejętności w "jezykach":<br/><br/>
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {LANGUAGES.map((lang, i) => (
            <div 
              key={lang.name} 
              className="bg-[#333] rounded-sm w-[150px] h-[110px] flex flex-col items-center justify-center shadow-2xl"
              style={{ 
                opacity: 0,
                animation: `popIn 0.6s ease forwards ${i * 0.1}s` 
              }}
            >
              <i className={`${lang.icon} text-white text-4xl mb-3`}></i>
              <span className="font-sans text-white/90 text-[11px] font-normal uppercase tracking-[0.25em]">
                {lang.name}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}