import React from 'react';
import { Volume2, VolumeX, Swords } from 'lucide-react';

const WarRoomHeader = ({ activeTab, setActiveTab, isMuted, setIsMuted }) => {
  return (
    <header className="absolute top-6 left-6 right-6 h-16 glass-panel rounded-lg flex justify-between items-center px-6 z-30">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border border-[var(--color-gold)]/50 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse"></div>
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-[0.2em] text-[var(--color-gold)] uppercase">Dien Bien Phu</h1>
          <p className="text-[9px] tracking-[0.3em] uppercase opacity-50 font-mono">Tactical Operations Center</p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-8 ml-auto">
        <div className="flex gap-1 bg-black/40 p-1 border border-white/10 rounded-md scale-90 md:scale-100 origin-right">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-2 md:px-4 py-1.5 text-[9px] md:text-xs font-bold tracking-widest uppercase transition-all rounded-sm ${activeTab === 'overview' ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)]' : 'opacity-40 hover:opacity-100'}`}
          >
            Tổng Quan
          </button>
          <button 
            onClick={() => setActiveTab('military')}
            className={`px-2 md:px-4 py-1.5 text-[9px] md:text-xs font-bold tracking-widest uppercase transition-all rounded-sm ${activeTab === 'military' ? 'bg-[var(--color-french)]/20 text-[var(--color-french)]' : 'opacity-40 hover:opacity-100'}`}
          >
            Tác Chiến
          </button>
          <button 
            onClick={() => setActiveTab('heroes')}
            className={`px-2 md:px-4 py-1.5 text-[9px] md:text-xs font-bold tracking-widest uppercase transition-all rounded-sm ${activeTab === 'heroes' ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)]' : 'opacity-40 hover:opacity-100'}`}
          >
            Anh Hùng
          </button>
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-3 md:pl-6">
          <button onClick={() => setIsMuted(!isMuted)} className="opacity-50 hover:opacity-100 transition-opacity">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default WarRoomHeader;
