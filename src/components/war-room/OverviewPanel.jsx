import React from 'react';
import { motion } from 'framer-motion';
import { CAMPAIGN_OVERVIEW } from '../../data/index';
import { Users, Swords, Globe, Target, AlertTriangle } from 'lucide-react';

const OverviewPanel = () => {
  return (
    <motion.div 
      key="overview-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-x-4 md:inset-x-24 top-24 bottom-24 md:top-28 md:bottom-28 glass-panel rounded-xl z-40 overflow-y-auto clean-scrollbar p-5 md:p-12 space-y-8 md:space-y-12 shadow-2xl backdrop-blur-xl bg-[var(--color-obsidian)]/80"
    >
      <header className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] tracking-widest uppercase drop-shadow-md">{CAMPAIGN_OVERVIEW.title}</h2>
        <div className="w-32 h-[1px] bg-[var(--color-gold)]/50 mx-auto"></div>
      </header>

      {/* Context Area */}
      <section className="grid md:grid-cols-2 gap-8 text-sm text-white/80 font-light leading-relaxed">
        <div className="bg-white/[0.02] p-8 border-l-2 border-[#e11d48]/50 shadow-inner">
          <p className="text-[10px] font-bold text-[#e11d48] uppercase mb-4 tracking-[0.2em]">Bối cảnh trước chiến dịch</p>
          <p className="text-justify">{CAMPAIGN_OVERVIEW.context.before}</p>
        </div>
        <div className="bg-white/[0.02] p-8 border-l-2 border-[var(--color-vietminh)]/50 shadow-inner">
          <p className="text-[10px] font-bold text-[var(--color-vietminh)] uppercase mb-4 tracking-[0.2em]">Tác động sau chiến dịch</p>
          <p className="text-justify">{CAMPAIGN_OVERVIEW.context.after}</p>
        </div>
      </section>

      {/* Forces Comparison */}
      <section className="grid xl:grid-cols-2 gap-16 pt-8 border-t border-white/10">
        {CAMPAIGN_OVERVIEW.forces.map((force, index) => (
          <div key={index} className="space-y-8">
            <div className={`pb-4 border-b ${force.id === 'vietminh' ? 'border-[var(--color-vietminh)]/40' : 'border-[#e11d48]/40'}`}>
               <h3 className={`text-3xl font-heading ${force.id === 'vietminh' ? 'text-[var(--color-vietminh)]' : 'text-[#e11d48]'}`}>{force.side}</h3>
               <p className="text-xs uppercase tracking-widest opacity-60 mt-3 font-mono">Chỉ huy: <span className="text-[var(--color-gold)]">{force.commander}</span></p>
            </div>

            <div className="space-y-4">
               <FeatureRow icon={<Users size={18}/>} label="Quân số" text={force.strength} />
               <FeatureRow icon={<Swords size={18}/>} label="Vũ khí & Hỏa lực" text={force.weapons} />
               <FeatureRow icon={<Globe size={18}/>} label="Đồng minh viện trợ" text={force.allies} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
               <div className="bg-white/[0.01] p-4 rounded-sm border border-white/5">
                 <div className="flex items-center gap-2 mb-4 text-[var(--color-vietminh)]">
                   <Target size={14} />
                   <span className="text-[10px] tracking-widest uppercase font-bold">Thuận lợi</span>
                 </div>
                 <ul className="space-y-3">
                   {force.advantages.map((adv, i) => (
                     <li key={i} className="text-xs font-light text-white/70 flex gap-3 leading-relaxed">
                       <span className="text-[var(--color-vietminh)] opacity-80 mt-0.5">■</span> <span>{adv}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="bg-white/[0.01] p-4 rounded-sm border border-white/5">
                 <div className="flex items-center gap-2 mb-4 text-[#e11d48]">
                   <AlertTriangle size={14} />
                   <span className="text-[10px] tracking-widest uppercase font-bold">Khó khăn</span>
                 </div>
                 <ul className="space-y-3">
                   {force.disadvantages.map((dis, i) => (
                     <li key={i} className="text-xs font-light text-white/70 flex gap-3 leading-relaxed">
                       <span className="text-[#e11d48] opacity-80 mt-0.5">■</span> <span>{dis}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

const FeatureRow = ({ icon, label, text }) => (
  <div className="flex gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.04] transition-colors">
    <div className="text-[var(--color-gold)] mt-1 bg-[var(--color-gold)]/10 p-2 rounded-full h-fit">{icon}</div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1.5">{label}</p>
      <p className="text-sm font-light text-white/90 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default OverviewPanel;
