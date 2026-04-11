import { useState } from "react";
import { CORRECT_PIN } from "../constants";

const BinKey = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-28 h-28 rounded-full bg-[#999] text-[#111] text-6xl font-serif flex items-center justify-center active:scale-90 transition-all duration-100"
  >
    {label}
  </button>
);

export default function Kod({ onUnlock, isActuallyUnlocked }) {
  const [pin, setPin] = useState("");
  const [shake, setShake] = useState(false);
  const [ok, setOk] = useState(isActuallyUnlocked);

  const press = (v) => {
    if (ok) return;
    const next = pin + v;
    setPin(next);
    
    if (next === CORRECT_PIN) setTimeout(() => setOk(true), 80);
    else if (next.length >= CORRECT_PIN.length) {
      setShake(true);
      setTimeout(() => { setShake(false); setPin(""); }, 600);
    }
  };

  return (
    <div 
      onWheel={(e) => ok && e.deltaY > 0 && onUnlock()}
      className={`fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-[200] transition-colors duration-900 ${ok ? "bg-[#3d9e4a]" : "bg-[#d0d0d0]"}`}
    >
      <div className={`flex flex-col items-center gap-10 transition-opacity duration-500 ${ok ? "opacity-0 pointer-events-none" : ""}`} style={shake ? { animation: "shake 0.5s" } : {}}>
        <div className="text-2xl font-serif ">Wprowadź PIN</div>
        
        <div className="flex gap-7">
          <BinKey label="0" onClick={() => press("0")} />
          <BinKey label="1" onClick={() => press("1")} />
        </div>

        <div className="text-3xl tracking-[3px]">
          {pin.length ? "•".repeat(pin.length) : <span className="text-[#bbb]">_ _ _ _ _</span>}
        </div>
      </div>

      <div className={`absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition-opacity duration-700 delay-300 ${ok ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="max-w-[1000px]">
          <p className="font-serif text-[50px] text-white leading-[1.3] mb-10">
            Mam 20 lat. Aktualnie kończę szkołę techniczną o profilu programista w małym mieście na Dolnym Śląsku, które słynie z porcelany. 
            Szkołę wybrałem świadomie - nie nadaję się na humanistę. Matematyka była w moim przypadku wstępem do programowania. 
            Zależności, zasady, konkretne wybory i jednoznaczność...<br/><br/>
          </p>
          <span className="font-serif text-2xl text-white/60">
            Proszę, przewijaj tę stronę do końca.
          </span>
        </div>
      </div>
    </div>
  );
}