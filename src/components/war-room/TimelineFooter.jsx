import React from 'react';
import { DIEN_BIEN_PHU_PHASES } from '../../data/index';

const TimelineFooter = ({ phaseIndex, setPhaseIndex }) => {
  return (
    <footer className="absolute bottom-6 left-6 right-6 h-20 glass-panel rounded-lg px-8 flex flex-col justify-center gap-2 z-30">
        <div className="flex justify-between text-[9px] font-mono tracking-widest text-[var(--color-gold)]/60 uppercase">
          <span>Phase 01 / Khai Cục</span>
          <span>Phase 04 / Khải Hoàn</span>
        </div>
        <div className="relative group px-1 flex items-center h-4">
          <div className="absolute inset-x-1 h-[2px] bg-white/10 rounded-full"></div>
          <input 
            type="range" 
            min="0" 
            max={DIEN_BIEN_PHU_PHASES.length - 1} 
            value={phaseIndex}
            onChange={(e) => setPhaseIndex(parseInt(e.target.value))}
            className="w-full h-full appearance-none bg-transparent cursor-pointer relative z-20 slider-custom" 
          />
          <div className="absolute left-1 right-1 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            {DIEN_BIEN_PHU_PHASES.map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === phaseIndex ? 'bg-[var(--color-gold)] scale-150 shadow-[0_0_10px_var(--color-gold)]' : i < phaseIndex ? 'bg-[var(--color-gold)]/50' : 'bg-white/20'}`}
                style={{ transform: i === phaseIndex ? 'translateY(0) scale(1.5)' : 'translateY(0)' }}
              ></div>
            ))}
          </div>
        </div>
    </footer>
  );
};

export default TimelineFooter;
