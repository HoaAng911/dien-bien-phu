import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LEGACY_DATA } from '../../data/index';

const LegacyScreen = ({ onRestart }) => {
  return (
    <motion.div 
      key="legacy-screen"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      className="h-screen w-screen bg-[var(--color-obsidian)] overflow-y-auto p-8 md:p-16 clean-scrollbar relative"
    >
      <div className="absolute inset-0 topographic-bg opacity-10 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto space-y-24 relative z-10 pb-20">
        
        <header className="text-center space-y-6 pt-10">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-5xl md:text-7xl font-heading text-[var(--color-gold)] uppercase tracking-widest font-light"
          >
            Khúc Khải Hoàn
          </motion.h2>
          <div className="w-24 h-[1px] bg-[var(--color-gold)]/50 mx-auto"></div>
        </header>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 space-y-12">
             <section className="space-y-6 bg-white/[0.02] p-8 border-l border-[var(--color-gold)]/30 backdrop-blur-md">
                <p className="text-xl leading-relaxed text-justify text-white/80 font-light tracking-wide">{LEGACY_DATA.summary}</p>
             </section>

             <section className="space-y-6">
                <h3 className="text-sm font-body text-[var(--color-gold)] uppercase tracking-[0.3em] font-bold">Thành tựu chiến dịch</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {LEGACY_DATA.achievements.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                    >
                      <span className="text-[var(--color-gold)] font-black text-lg">/</span>
                      <span className="text-sm text-white/70 font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
             </section>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-[3/4] p-2 border border-white/10 relative group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Flag_of_the_People%27s_Army_of_Vietnam.svg/1200px-Flag_of_the_People%27s_Army_of_Vietnam.svg.png" 
                alt="Victory" 
                className="w-full h-full object-cover opacity-60 grayscale-[30%] blur-[1px] group-hover:grayscale-0 group-hover:blur-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-3xl font-heading text-[var(--color-gold)] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-0 transition-opacity">Quyết Thắng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 pt-10 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-sm font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase">Chứng tích lịch sử</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LEGACY_DATA.today.map((place, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="group relative h-64 overflow-hidden border border-white/10 bg-white/[0.02]"
              >
                <img src={place.url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 grayscale hover:grayscale-0" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-obsidian)] to-transparent p-6">
                  <p className="font-light text-sm tracking-widest text-[#f3f4f6]">{place.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center pt-10">
          <button 
            onClick={onRestart}
            className="px-8 py-3 bg-transparent border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-all text-xs uppercase tracking-[0.2em]"
          >
            <ArrowRight className="inline mr-2 w-4 h-4" /> Về Màn Hình Chính
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LegacyScreen;
