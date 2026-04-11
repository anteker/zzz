import { useState, useRef } from "react";

import Kod from "./components/Kod";
import Egzamin from "./components/Egzamin";
import Swiadectwo from "./components/Swiadectwo";
import Jezyk from "./components/Jezyk";
import Minecraft from "./components/Minecraft";
import Praktyka from "./components/Praktyka";
import Serwer from "./components/Serwer";
import Psychoterapia from "./components/Psychoterapia";
import KursINF from "./components/KursINF";
import Zakonczenie from "./components/Zakonczenie";

import praktyki1 from "./assets/images/zasoby/praktyki1.webp";
import praktyki2 from "./assets/images/zasoby/praktyki2.webp";
import klasa1 from "./assets/images/nagrody/swiadectwo/1klasa.webp";
import klasa2 from "./assets/images/nagrody/swiadectwo/2klasa.webp";
import klasa3 from "./assets/images/nagrody/swiadectwo/3klasa.webp";
import klasa4 from "./assets/images/nagrody/swiadectwo/4klasa.webp";
import styp1 from "./assets/images/nagrody/stypendium/1stypendium.webp";
import styp2 from "./assets/images/nagrody/stypendium/2stypendium.webp";
import styp3 from "./assets/images/nagrody/stypendium/3stypendium.webp";
import styp4 from "./assets/images/nagrody/stypendium/4stypendium.webp";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const cd = useRef(false);

  const SLIDES = [
    <Kod onUnlock={() => { setUnlocked(true); goTo(1); }} isActuallyUnlocked={unlocked} />,
    <Egzamin/>,
    <Swiadectwo certyfikaty={[klasa1, klasa2, klasa3, klasa4, styp1, styp2, styp3, styp4]} />,
    <Jezyk/>,
    <Minecraft/>,
    <Praktyka number={1} title="Praktyka w zakładzie przemysłowym - klasa 3." screenshot={praktyki1} kolor="#ffffff" description="W ramach praktyk stworzyłem system monitorujący parametry pracy układu farbowego w drukarni wklęsłodrukowej. System pobiera dane z bazy, do której są wprowadzane poprzez liczne czujniki (poziom farby, przepływ, parametry farby...). Wizualizacja odbywa się on-line z częstotliwością równą próbkowaniu przez czujniki. Użyłem w tym projekcie języka PHP jako mostu pomiędzy bazą danych urządzeń oraz graficznym środowiskiem. Dzisiaj wiem, że to nie było optymalne rozwiązanie..." />,
    <Praktyka number={2} title="Praktyka w zakładzie przemysłowym - klasa 4." screenshot={praktyki2} kolor="#7d77e5" tekstkolor="#ffffff" description="Druga moja praktyka w tym samym zakładzie produkcyjnym. Tym razem moim zadaniem było zwizualizowanie osób, które będąc na danej zmianie w pracy, mają uprawnienia ratowników medycznych i/lub pożarowych. Aplikacja pobierała dane z bazy RCP, z biblioteki zdjęć, z bazy szkoleń, z bazy pracowników. Warunkując przypadki system wyświetlał dane konkretnych osób. Dodać należy, że system był wielowymiarowy - operował niezależnie na 8 działach produkcyjnych oraz na 2 modelach pracy (zmianowa i administracyjna)." />,
    <Serwer/>,
    <Psychoterapia/>,
    <KursINF/>,
    <Zakonczenie/>
  ];

  const goTo = (idx) => {
    if (idx < 0 || idx >= SLIDES.length || (!unlocked && idx > 0) || idx === current) return;
    setVisible(false);
    setTimeout(() => { setCurrent(idx); setVisible(true); }, 300);
  };

  const handleWheel = (e) => {
    if (cd.current) return;
    cd.current = true;
    goTo(e.deltaY > 0 ? current + 1 : current - 1);
    setTimeout(() => cd.current = false, 900);
  };

  return (
    <div className="app-viewport" onWheel={handleWheel}>
      <div className="slide-container" style={{ opacity: visible ? 1 : 0 }}>
        {SLIDES[current]}
      </div>
      {unlocked && (
        <div className="nav-dots">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`dot ${i === current ? "active" : ""}`} />
          ))}
        </div>
      )}
    </div>
  );
}