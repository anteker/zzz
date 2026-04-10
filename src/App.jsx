import React, { useState, useEffect } from "react";

import PinOverlay        from "./components/PinOverlay";
import AchievementCard   from "./components/AchivementCards";
import LanguagesSection  from "./components/LanguagesSection";
import InternshipSection from "./components/InternshipSection";
import { FinaleSection, MinecraftSection, ServerSection } from "./components/Sections";
import Psychoterapia from "./components/Psychoterapia";
import KursINF from "./components/KursINF"
import Zakonczenie from "./components/Zakonczenie";

import praktyki1   from "./assets/images/zasoby/praktyki1.webp";
import praktyki2   from "./assets/images/zasoby/praktyki2.webp";
import klasa1      from "./assets/images/nagrody/swiadectwo/1klasa.webp";
import klasa2      from "./assets/images/nagrody/swiadectwo/2klasa.webp";
import klasa3      from "./assets/images/nagrody/swiadectwo/3klasa.webp";
import klasa4      from "./assets/images/nagrody/swiadectwo/4klasa.webp";
import stypendium1 from "./assets/images/nagrody/stypendium/1stypendium.webp";
import stypendium2 from "./assets/images/nagrody/stypendium/2stypendium.webp";
import stypendium3 from "./assets/images/nagrody/stypendium/3stypendium.webp";
import stypendium4 from "./assets/images/nagrody/stypendium/4stypendium.webp";

const SLIDES = [
  <AchievementCard key="ach" />,
  <FinaleSection key="finale" certificates={[klasa1, klasa2, klasa3, klasa4, stypendium1, stypendium2, stypendium3,stypendium4]} />,
  <LanguagesSection key="langs" />,
  <MinecraftSection key="mc" />,
  <InternshipSection key="int1" number={1} title="Praktyka w zakładzie przemysłowym - klasa 3." screenshot={praktyki1} kolor="#ffffff" 
description={ <>W ramach praktyk stworzyłem system monitorujący parametry pracy układu farbowego w drukarni wklęsłodrukowej. System pobiera dane z bazy, do której są wprowadzane poprzez liczne czujniki (poziom farby, przepływ, parametry farby...). Wizualizacja odbywa się on-line z częstotliwością równą próbkowaniu przez czujniki. 
Użyłem w tym projekcie języka PHP jako mostu pomiędzy bazą danych urządzeń oraz graficznym środowiskiem. <br/>
Dzisiaj wiem, że to nie było optymalne rozwiązanie... </> } />,

  <InternshipSection key="int2" number={2} title="Praktyka w zakładzie przemysłowym - klasa 4." screenshot={praktyki2} kolor="#7d77e5" tekstkolor="#ffffff" 
  description={ <>Druga moja praktyka w tym samym zakładzie produkcyjnym. Tym razem moim zadaniem było zwizualizowanie osób, które będąc na danej zmianie w pracy, mają uprawnienia ratowników medycznych i/lub pożarowych.
<br/>Aplikacja pobierała dane z bazy RCP, z biblioteki zdjęć, z bazy szkoleń, z bazy pracowników. Warunkując przypadki system wyświetlał dane konkretnych osób. Dodać należy, że system był wielowymiarowy - operował niezależnie na 8 działach produkcyjnych oraz na 2 modelach pracy (zmianowa i administracyjna). </> } />,
  <ServerSection key="srv" />,
  <Psychoterapia key="psycho"/>,
  <KursINF key="kurs"/>,
  <Zakonczenie key="zakoczenie"/>
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
