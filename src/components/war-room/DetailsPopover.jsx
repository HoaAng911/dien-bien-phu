import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Castle, Trophy } from 'lucide-react';

const DetailsPopover = ({ selectedMarker, selectedHero, onClose }) => {
  return (
    <AnimatePresence>
      {(selectedMarker || selectedHero) && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute right-6 top-28 w-[350px] glass-panel rounded-lg p-6 border-t-2 shadow-2xl z-40"
          style={{ borderTopColor: selectedMarker ? (selectedMarker.status === 'captured' ? 'var(--color-vietminh)' : 'var(--color-french)') : 'var(--color-gold)' }}
        >
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 opacity-50 hover:opacity-100"
          >✕</button>

          {selectedMarker && (
            <div className="space-y-4 pt-2">
              <p className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-mono">Target Acquired</p>
              <h3 className="text-2xl font-heading font-light tracking-wide">{selectedMarker.name}</h3>
              <p className="text-sm font-light leading-relaxed text-white/70">"{selectedMarker.info}"</p>
              <div className="pt-2">
                <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm border ${selectedMarker.status === 'captured' ? 'border-[var(--color-vietminh)] text-[var(--color-vietminh)] bg-[var(--color-vietminh)]/10' : 'border-[var(--color-french)] text-[var(--color-french)] bg-[var(--color-french)]/10 animate-pulse'}`}>
                    {selectedMarker.status === 'captured' ? 'Khu vực Đã Kiểm Soát' : 'Khu vực Giao Tranh'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 mt-4 text-[10px] font-mono opacity-50">
                  <div>LAT: 21°23'N</div>
                  <div>LONG: 103°0'E</div>
              </div>
            </div>
          )}

          {selectedHero && (
            <div className="space-y-4 pt-2">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-mono">Hồ Sơ Mật</p>
              <h3 className="text-2xl font-heading font-light text-[var(--color-gold)]">{selectedHero.name}</h3>
              <div className="bg-white/5 p-3 rounded-sm border-l-2 border-[var(--color-gold)]">
                <p className="text-xs font-light text-white/90">"{selectedHero.action}"</p>
              </div>
              <p className="text-[10px] uppercase opacity-50 font-mono">Vị Trí: {selectedHero.location}</p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailsPopover;
