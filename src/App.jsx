import React, { useState, useEffect } from "react";

import PinOverlay        from "./components/PinOverlay";
import AchievementCard   from "./components/AchivementCards";
import LanguagesSection  from "./components/LanguagesSection";
import InternshipSection from "./components/InternshipSection";
import ProjectCard       from "./components/ProjectCard";
import { FinaleSection, MinecraftSection, ServerSection } from "./components/Sections";

import praktyki1   from "./assets/images/praktyki1.png";
import praktyki2   from "./assets/images/praktyki2.png";
import witryna     from "./assets/images/witryna.png";
import projekt2    from "./assets/images/projekt2.png";
import projekt3    from "./assets/images/projekt3.png";
import projekt4    from "./assets/images/projekt4.png";
import klasa1      from "./assets/images/nagrody/1klasa.png";
import klasa2      from "./assets/images/nagrody/2klasa.png";
import klasa3      from "./assets/images/nagrody/3klasa.png";
import klasa4      from "./assets/images/nagrody/4klasa.png";
import stypendium1 from "./assets/images/nagrody/1stypendium.png";
import stypendium2 from "./assets/images/nagrody/2stypendium.png";
import stypendium3 from "./assets/images/nagrody/3stypendium.png";
import stypendium4 from "./assets/images/nagrody/4stypendium.png";

const SLIDES = [
  <AchievementCard key="ach" />,
  <FinaleSection key="finale" certificates={[klasa1, klasa2, klasa3, klasa4, stypendium1, stypendium2, stypendium3,stypendium4]} />,
  <LanguagesSection key="langs" />,
  <MinecraftSection key="mc" />,
  //<ServerSection key="srv" />,
  <InternshipSection key="int1" number={1} title="Praktyka w zakładzie przemysłowym - klasa 3." screenshot={praktyki1} kolor="#ffffff" 
description={ <>W ramach praktyk stworzyłem system monitorujący parametry pracy układu farbowego w drukarni wklęsłodrukowej. System pobiera dane z bazy, do której są wprowadzane poprzez liczne czujniki (poziom farby, przepływ, parametry farby...). Wizualizacja odbywa się on-line z częstotliwością równą próbkowaniu przez czujniki. 
Użyłem w tym projekcie języka PHP jako mostu pomiędzy bazą danych urządzeń oraz graficznym środowiskiem. <br/>
Dzisiaj wiem, że to nie było optymalne rozwiązanie... </> } />,

  <InternshipSection key="int2" number={2} title="Praktyka w zakładzie przemysłowym - klasa 4." screenshot={praktyki2} kolor="#7d77e5" tekstkolor="#ffffff" 
  description={ <>Druga moja praktyka w tym samym zakładzie produkcyjnym. Tym razem moim zadaniem było zwizualizowanie osób, które będąc na danej zmianie w pracy, mają uprawnienia ratowników medycznych i/lub pożarowych.
<br/>Aplikacja pobierała dane z bazy RCP, z biblioteki zdjęć, z bazy szkoleń, z bazy pracowników. Warunkując przypadki system wyświetlał dane konkretnych osób. Dodać należy, że system był wielowymiarowy - operował niezależnie na 8 działach produkcyjnych oraz na 2 modelach pracy (zmianowa i administracyjna). </> } />,
  <ProjectCard key="proj1" title="Projekt pozaszkolny" image={witryna} description={<>W pełni responsywna strona internetowa mojego serwera Minecraft – <a href="https://indigomc.pl" target="_blank" rel="noopener noreferrer">indigomc.pl</a>. Gracze mogą na niej kupować doładowania portfela, który w grze pełni rolę waluty do nabywania konkretnych usług. Projekt korzysta z systemu płatności PayByLink, który po zweryfikowaniu płatności wysyła sygnał, umożliwiając graczowi otrzymanie w grze wybranej wartości doładowania. Każda transakcja przechodzi przez indywidualną bramkę płatniczą i jest w pełni szyfrowana. Strona wykorzystuje również bazę danych do przechowywania informacji o graczach oraz prowadzenia statystyk.</>} />,
  <ProjectCard key="proj2" title="Projekt pozaszkolny" image={projekt2} description="„Tworzenie pluginów do Minecrafta oraz własnego serwera, co pozwoliło mi praktycznie poznawać Javę, rozwijać umiejętności programistyczne oraz konfigurować i poznawać Bukkit API. Projekt był częścią wcześniejszej strony internetowej, dzięki czemu mogłem jednocześnie łączyć rozwój backendu serwera z nauką integracji pluginów i praktycznym zastosowaniem języka Java.”" />,
  <ProjectCard key="proj3" title="Projekt pozaszkolny" image={projekt3} description="W pełni responsywna strona internetowa dla lokalnego psychoterapeuty, stworzona w Next.js, umożliwiająca prezentację usług oraz kontakt z klientami poprzez odnośnik do profilu na portalu ZnanyLekarz.pl." />,
  <ProjectCard key="proj4" title="I wiele, wiele więcej!" images={[projekt4]} description="Tworzę kompleksowy kurs przygotowujący do kwalifikacji INF.04, której jestem absolwentem, dzięki czemu dobrze rozumiem wymagania egzaminacyjne oraz potrzeby osób uczących się. W ramach projektu stworzę pełnoprawną platformę edukacyjną – od panelu logowania i rejestracji użytkowników, przez opracowanie i wdrożenie bazy danych do przechowywania informacji o użytkownikach, aż po integrację z operatorem płatności umożliwiającym zakup dostępu do kursu.
Na platformie opracuję autorskie materiały wideo, które w przystępny sposób omówią cały zakres wiedzy wymagany do zdania kwalifikacji INF.04. Kurs będzie prowadzony krok po kroku, obejmując zarówno zagadnienia teoretyczne, jak i praktyczne, tak aby użytkownicy mogli kompleksowo przygotować się do egzaminu.
Projekt połączy umiejętności programistyczne – tworzenie aplikacji webowej, obsługę backendu i baz danych oraz integrację z zewnętrznymi API – z kompetencjami dydaktycznymi, ponieważ jego celem będzie nie tylko stworzenie działającego systemu, ale przede wszystkim skuteczne przygotowanie innych osób do egzaminu zawodowego." />,
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
