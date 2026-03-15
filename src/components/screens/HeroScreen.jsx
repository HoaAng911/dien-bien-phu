import React from 'react';
import { motion } from 'framer-motion';

const HeroScreen = ({ onStart }) => {
  return (
    <motion.div 
      key="hero-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex flex-col items-center justify-center relative topographic-bg"
    >
      <div className="absolute inset-0 radial-vignette opacity-80 pointer-events-none"></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 p-12 glass-panel border border-[var(--color-gold)]/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        <h1 className="text-6xl md:text-8xl font-heading text-[var(--color-gold)] mb-4 tracking-tighter uppercase drop-shadow-lg">Điện Biên Phủ</h1>
        <div className="h-[1px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent my-6"></div>
        <p className="text-xl md:text-2xl tracking-[0.5em] uppercase font-light text-white/70">Dấu ấn lịch sử 1954</p>
      </motion.div>
      
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart} 
        className="mt-16 px-16 py-4 bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] text-lg font-light tracking-[0.2em] rounded-sm hover:bg-[var(--color-gold)]/10 transition-all z-10 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.1)] group overflow-hidden relative"
      >
        <span className="relative z-10 uppercase">Truy cập Sa bàn</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </motion.button>
    </motion.div>
  );
};

export default HeroScreen;
