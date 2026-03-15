import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info } from 'lucide-react';

const IntelligenceSidebar = ({ currentPhase, phaseIndex, activeTab }) => {
  return (
    <aside className="absolute left-6 right-6 bottom-28 md:right-auto md:left-6 md:top-28 md:bottom-28 md:w-[400px] glass-panel rounded-lg flex flex-col z-20 overflow-hidden shadow-2xl max-h-[40vh] md:max-h-none">
      {activeTab === 'military' ? (
        <>
          <div className="p-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-[var(--color-gold)] mb-1">
              <Calendar size={14} />
              <span className="font-mono text-[10px] tracking-widest uppercase opacity-80">Thời gian thực tế ảo</span>
            </div>
            <div className="font-mono text-lg font-bold tracking-wider">{currentPhase.date}</div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8 clean-scrollbar">
            <motion.section 
              key={`desc-${phaseIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-heading text-[var(--color-gold)] font-light">{currentPhase.title}</h2>
              <p className="text-sm leading-relaxed text-white/70 font-light text-justify">
                {currentPhase.description}
              </p>
            </motion.section>

            <section className="space-y-5 pt-6 border-t border-white/10 relative">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] absolute -top-2 bg-[var(--color-obsidian)] px-2 left-4">Intel Report</p>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[var(--color-vietminh)] uppercase tracking-wider">Việt Minh</span>
                      <span className="text-white/80">{currentPhase.stats.vietMinh}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: "0%" }} animate={{ width: "85%" }} className="h-full bg-[var(--color-vietminh)] shadow-[0_0_10px_#10b981]" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[var(--color-french)] uppercase tracking-wider">Quân Pháp</span>
                      <span className="text-white/80">{currentPhase.stats.french}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: "0%" }} animate={{ width: "40%" }} className="h-full bg-[var(--color-french)] shadow-[0_0_10px_#e11d48]" />
                    </div>
                </div>

                <div className="mt-4 p-3 bg-white/[0.03] border border-white/5 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Info size={12} className="text-[var(--color-gold)]" />
                      <span className="text-[9px] uppercase tracking-widest text-[#a38520]">Chiến Thuật Pháo Binh</span>
                    </div>
                    <p className="text-xs font-light text-white/80">{currentPhase.stats.artillery}</p>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden">
           <div className="p-4 border-b border-white/10 bg-white/[0.02]">
             <h2 className="text-[var(--color-gold)] font-mono text-[10px] tracking-widest uppercase">Hồ Sơ Anh Hùng Chiến Dịch</h2>
           </div>
           <div className="flex-1 overflow-y-auto p-6 space-y-4 clean-scrollbar">
              {currentPhase.heroes?.map((hero, idx) => (
                <motion.div 
                  key={hero.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-white/[0.03] border border-white/10 rounded-lg hover:border-[var(--color-gold)]/40 transition-colors group cursor-help"
                >
                  <h3 className="text-[var(--color-gold)] font-heading text-lg mb-2">{hero.name}</h3>
                  <p className="text-xs text-white/60 leading-relaxed italic">"{hero.action}"</p>
                  <div className="mt-3 text-[9px] uppercase tracking-widest opacity-40">Địa điểm: {hero.location}</div>
                </motion.div>
              ))}
              {(!currentPhase.heroes || currentPhase.heroes.length === 0) && (
                <p className="text-center text-white/30 text-xs py-10">Đang cập nhật danh sách anh hùng cho giai đoạn này...</p>
              )}
           </div>
        </div>
      )}
    </aside>
  );
};

export default IntelligenceSidebar;
