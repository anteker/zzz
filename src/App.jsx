import React, { useState, useEffect } from "react";

import PinOverlay        from "./components/PinOverlay";
import AchievementCard   from "./components/AchivementCards";
import LanguagesSection  from "./components/LanguagesSection";
import InternshipSection from "./components/InternshipSection";
import ProjectCard       from "./components/ProjectCard";
import { FinaleSection, MinecraftSection, ServerSection } from "./components/Sections";

import praktyki1   from "./assets/images/praktyki1.png";
import praktyki2   from "./assets/images/praktyki2.jpeg";
import witryna     from "./assets/images/witryna.png";
import projekt2    from "./assets/images/projekt2.png";
import projekt22   from "./assets/images/projekt22.png";
import projekt3    from "./assets/images/projekt3.png";
import projekt4    from "./assets/images/projekt4.png";
import klasa1      from "./assets/images/nagrody/klasa1.png";
import klasa2      from "./assets/images/nagrody/klasa2.png";
import klasa3      from "./assets/images/nagrody/klasa3.png";
import klasa4      from "./assets/images/nagrody/klasa4.png";
import stypendium1 from "./assets/images/nagrody/stypendium1.png";
import stypendium2 from "./assets/images/nagrody/stypendium2.png";
import stypendium3 from "./assets/images/nagrody/stypendium3.png";

const SLIDES = [
  <AchievementCard key="ach" />,
  <FinaleSection key="finale" certificates={[klasa1, klasa2, klasa3, klasa4, stypendium1, stypendium2, stypendium3]} />,
  <LanguagesSection key="langs" />,
  <MinecraftSection key="mc" />,
  <ServerSection key="srv" />,
  <InternshipSection key="int1" number={1} screenshot={praktyki1} kolor="#ffffff" description="Stworzyłem, w ramach praktyk, system monitorujący bieżące zużycie farby oraz ich stany magazynowe w dużej drukarni wklęsłodrukowej." />,
  <InternshipSection key="int2" number={2} screenshot={praktyki2} kolor="#7d77e5" description='Stworzyłem, w ramach praktyk, „żywą" listę pracowników obecnych na zmianie z bieżącym odczytem ich obecności oraz funkcjami, jakie pełnią w zespołach.' />,
  <ProjectCard key="proj1" title="Projekt pozaszkolny" images={[witryna]} description={<>W pełni responsywna strona internetowa mojego serwera <a href="https://indigomc.pl" target="_blank" rel="noreferrer" className="font-bold underline">indigomc.pl</a> zintegrowana z płatnościami PayByLink.</>} />,
  <ProjectCard key="proj2" title="Projekt pozaszkolny" images={[projekt2, projekt22]} description="Tworzenie pluginów do Minecrafta, które towarzyszyły mi w nauce i praktycznym poznawaniu Javy." />,
  <ProjectCard key="proj3" title="Projekt pozaszkolny" images={[projekt3]} description="W pełni responsywna strona internetowa dla lokalnego psychoterapeuty – mój pierwszy projekt stworzony w Next.js." />,
  <ProjectCard key="proj4" title="I wiele, wiele więcej!" images={[projekt4]} description="Obecnie tworzę aplikację mobilną dla iOS, która ułatwia graczom gier Supercell śledzenie postępów, korzystając z oficjalnego API Supercell. Projekt realizuję w Swift." />,
];

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent]   = useState(0);
  const [visible, setVisible]   = useState(true); // kontroluje opacity

  // Zmiana slajdu z fade out → zmiana → fade in
  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
    if (clamped === current) return;
    setVisible(false);                          // fade out
    setTimeout(() => {
      setCurrent(clamped);                      // podmień slajd
      setVisible(true);                         // fade in
    }, 300);                                    // czas fade out
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Scroll kółkiem
  useEffect(() => {
    if (!unlocked) return;
    let cooldown = false;
    const handler = (e) => {
      e.preventDefault();
      if (cooldown) return;
      cooldown = true;
      e.deltaY > 0 ? next() : prev();
      setTimeout(() => { cooldown = false; }, 900);
    };
    window.addEventListener("wheel", handler, { passive: false });
    return () => window.removeEventListener("wheel", handler);
  }, [unlocked, current]);

  if (!unlocked) {
    return <PinOverlay unlocked={false} onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>

      {/* Slajd z fade */}
      <div style={{
        width: "100%",
        height: "100%",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}>
        {SLIDES[current]}
      </div>

      {/* Kropki nawigacyjne */}
      <div style={{
        position: "fixed", right: 20, top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 10,
        zIndex: 999,
      }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 12 : 8,
              height: i === current ? 12 : 8,
              borderRadius: "50%",
              background: i === current ? "#222" : "rgba(0,0,0,0.3)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.2s",
            }}
          />
        ))}
      </div>

    </div>
  );
}
