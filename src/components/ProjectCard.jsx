import React, { useRef } from "react";
import { useInView } from "../hooks/useVisuals";

export default function ProjectCard({ title, description, images = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.2);

  // Wybieramy pierwsze zdjęcie z tablicy
  const mainImage = images[0];

  return (
    <section 
      ref={ref} 
      className="min-h-screen bg-[#d8d8d8] flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden"
    >
      <div className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-1000 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        
        {/* LEWA STRONA: TEKST */}
        <div className="flex flex-col text-left order-2 lg:order-1">
          <h2 className="font-serif text-[clamp(32px,5vw,52px)] text-[#111] font-bold mb-8 leading-[1.1]">
            {title}
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] text-[#333] leading-[1.7] max-w-[540px]">
            {description}
          </p>
        </div>

        {/* PRAWA STRONA: ZDJĘCIE */}
        <div className="w-full order-1 lg:order-2">
          {mainImage ? (
            <div className="w-full shadow-[0_30px_60px_rgba(0,0,0,0.25)] rounded-sm overflow-hidden bg-[#c4c4c4]">
              <img 
                src={mainImage} 
                alt={title} 
                className="w-full h-auto object-cover block transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] bg-[#c4c4c4] flex items-center justify-center text-[#888] uppercase tracking-widest shadow-inner">
              [ Brak zdjęcia ]
            </div>
          )}
        </div>

      </div>
    </section>
  );
}