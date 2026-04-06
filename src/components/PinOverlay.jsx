import React, { useState, useEffect } from "react";
import { CORRECT_PIN } from "../constants";

const BinKey = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-28 h-28 rounded-full bg-[#999] text-[#111] text-6xl font-serif font-bold flex items-center justify-center shadow-[0_5px_14px_rgba(0,0,0,0.22)] active:bg-[#7a7a7a] active:scale-90 transition-all duration-100"
  >
    {label}
  </button>
);

export default function PinOverlay({ onUnlock }) {
  const [localInput, setLocalInput] = useState("");
  const [shake, setShake] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handlePress = (digit) => {
    if (showGreen) return;
    const next = localInput + digit;
    setLocalInput(next);
    
    if (next === CORRECT_PIN) {
      setTimeout(() => setShowGreen(true), 80);
    } else if (next.length === CORRECT_PIN.length) {
      setShake(true);
      setTimeout(() => { setShake(false); setLocalInput(""); }, 600);
    }
  };

  useEffect(() => {
    if (!showGreen || isLeaving) return;
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setIsLeaving(true);
        onUnlock(); 
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [showGreen, isLeaving, onUnlock]);

  return (
    <div className={`fixed inset-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden z-[200] transition-transform duration-[900ms] ease-in-out ${showGreen ? "bg-[#3d9e4a]" : "bg-[#d0d0d0]"} ${isLeaving ? "-translate-y-full" : "translate-y-0"}`}>
      
      {/* INTERFEJS PIN */}
      <div className={`flex flex-col items-center gap-10 transition-opacity duration-500 ${showGreen ? "opacity-0 pointer-events-none" : "opacity-100"}`} style={shake ? { animation: "shake 0.5s ease" } : {}}>
        <div className="text-2xl font-medium text-[#222] tracking-widest text-center font-serif">Wprowadź PIN</div>
        <div className="flex gap-7">
          {["0", "1"].map(n => <BinKey key={n} label={n} onClick={() => handlePress(n)} />)}
        </div>
        <div className="text-3xl text-[#333] tracking-[14px]">
          {localInput.length === 0 ? <span className="text-[#bbb] tracking-[8px]">_ _ _ _ _</span> : "•".repeat(localInput.length)}
        </div>
      </div>


      <div className={`absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition-opacity duration-700 delay-300 ${showGreen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        
        <div className="max-w-[1000px]">
          
          <p className="font-serif text-[50px] text-white/90 leading-[1.3] mb-10">
            Mam 20 lat. Kończę właśnie szkołę techniczną o profilu programista w małym mieście na Dolnym Śląsku, które słynie z porcelany. 
            Szkołę wybrałem świadomie — nie nadaję się na humanistę. Matematyka była w moim przypadku wstępem do programowania. 
            Zależności, zasady, konkretne wybory i jednoznaczność...
          </p>

          <span className="font-serif text-[19px] text-white/60">
            Przewijaj tę stronę dalej.
          </span>
        </div>
        
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-5px); }
        }
      `}</style>
    </div>
  );
}