import kursinf from "../assets/images/kursinf.png";

export default function KursINF() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      
      {/* Tło */}
      <div className="absolute inset-0">
        <img 
          src={kursinf} 
          alt="KursINF tło" 
          className="w-full h-full object-fill" 
        />
        {/* Warstwa przyciemniająca - opcjonalnie zwiększ opacity jeśli tekst jest nieczytelny */}
        <div className="absolute inset-0" />
      </div>

      {/* Kontener tekstu */}
      <div className="relative z-10 max-w-[770px] px-6 text-left 
                      /* TUTAJ STERUJESZ POZYCJĄ: */
                      translate-y-[-5%]  /* Przesunięcie góra/dół (procentowo lepiej reaguje) */
                      translate-x-[-50%]   /* Przesunięcie lewo/prawo jeśli trzeba */">
        
        <p className="font-serif text-[50px] text-[#fff] mb-6">
          Co po maturze? 
        </p>
        
<p className="font-serif text-2xl text-[#fff] leading-[1.2]">
    Czas na realizację kolejnego, tym razem większego, projektu.<br/>
    Tworzę kompleksowy kurs przygotowujący do kwalifikacji programistycznej INF.03 i INF.04. Sam 
    bardzo dobrze zdałem oba egzaminy dlatego mam prawo sądzić, że dobrze rozumiem wymagania 
    egzaminacyjne oraz potrzeby osób uczących się.<br/><br/>

    W ramach projektu stworzę pełnoprawną platformę edukacyjną – od panelu logowania i rejestracji 
    użytkowników, przez opracowanie i wdrożenie bazy danych do przechowywania informacji o 
    użytkownikach, aż po integrację z operatorem płatności umożliwiającym zakup dostępu do kursu.<br/><br/>

    Na platformie opracuję autorskie materiały wideo, które w przystępny sposób omówią cały zakres 
    wiedzy wymagany do zdania kwalifikacji INF.03 i INF.04. Kurs będzie prowadzony krok po kroku, 
    obejmując zarówno zagadnienia teoretyczne, jak i praktyczne, tak aby użytkownicy mogli 
    kompleksowo przygotować się do egzaminu.<br/><br/>

    Projekt połączy umiejętności programistyczne – tworzenie aplikacji webowej, obsługę backendu i 
    baz danych oraz integrację z zewnętrznymi API – z kompetencjami dydaktycznymi, ponieważ jego 
    celem będzie nie tylko stworzenie działającego systemu, ale przede wszystkim skuteczne 
    przygotowanie innych osób do egzaminu zawodowego.
</p>
      </div>
    </section>
  );
}