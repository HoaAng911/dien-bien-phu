import React, { memo, useMemo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveMap = memo(({ currentPhase, onMarkerClick, onHeroClick, activeTab, showLegend }) => {
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    const checkPerf = () => {
      setIsLowPerf(window.innerWidth < 1024);
    };
    checkPerf();
    window.addEventListener('resize', checkPerf);
    return () => window.removeEventListener('resize', checkPerf);
  }, []);

  const rotation = 180;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden cursor-crosshair">
      
      {/* MAP LEGEND (GÓC TRÊN PHẢI) - PRO VIP */}
      <AnimatePresence>
        {showLegend && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-6 top-28 z-20 bg-black/70 backdrop-blur-xl p-5 rounded-lg border border-[var(--color-gold)]/20 w-80 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] mb-4 font-bold border-b border-white/10 pb-2 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12"><rect width="12" height="12" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" /><line x1="0" y1="6" x2="12" y2="6" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" /><line x1="6" y1="0" x2="6" y2="12" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" /></svg>
              Chú thích Sa bàn Tác chiến
            </h4>
            <div className="space-y-3 text-[11px] font-light text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#10b981]/10 border-2 border-[#10b981] flex items-center justify-center shrink-0">
                   <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                </div> 
                <span className="tracking-wide">Cứ điểm Việt Minh kiểm soát</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e11d48]/10 border-2 border-[#e11d48] flex items-center justify-center shrink-0">
                   <div className="w-2 h-2 bg-[#e11d48] rounded-full animate-pulse"></div>
                </div> 
                <span className="tracking-wide">Cứ điểm Pháp (Đang giao tranh)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="8" className="shrink-0"><path d="M0 4 Q5 1 10 4 T20 4" stroke="#4ade80" strokeWidth="2" fill="none" opacity="0.7" /></svg>
                <span className="tracking-wide">Hệ thống Sông Nậm Rốm</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="8" className="shrink-0"><line x1="0" y1="4" x2="20" y2="4" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 2" opacity="0.8" /></svg>
                <span className="tracking-wide">Giao thông hào / Đường tiến công</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="10" className="shrink-0"><rect width="20" height="8" fill="#111" stroke="#D4AF37" strokeWidth="1" opacity="0.6" /><line x1="2" y1="4" x2="18" y2="4" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" /></svg>
                <span className="tracking-wide">Đường băng Mường Thanh</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="10" className="shrink-0"><circle cx="10" cy="5" r="4" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 1" opacity="0.6" /><circle cx="10" cy="5" r="2" fill="#D4AF37" opacity="0.15" /></svg>
                <span className="tracking-wide">Vùng phòng thủ trung tâm</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="10" className="shrink-0"><path d="M2 8 L5 2 L8 8 L11 2 L14 8 L17 2" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.6" /></svg>
                <span className="tracking-wide">Hàng rào kẽm gai</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="10" className="shrink-0"><path d="M0 5 Q5 2 10 5 T20 5" stroke="#fb923c" strokeWidth="1.5" fill="none" strokeDasharray="4 2" opacity="0.6" /></svg>
                <span className="tracking-wide">Đường vận tải / Tiếp viện VM</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="10" className="shrink-0">
                  <polygon points="2,8 5,2 8,8" fill="#2d5a27" opacity="0.7" />
                  <polygon points="8,8 11,2 14,8" fill="#1a4a14" opacity="0.7" />
                  <polygon points="13,8 16,2 19,8" fill="#2d5a27" opacity="0.5" />
                </svg>
                <span className="tracking-wide">Rừng rậm che phủ</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Container to handle map panning/zooming if needed */}
      <div className="w-full h-full relative">
        <svg viewBox="0 0 1200 900" className="w-full h-full preserve-3d" preserveAspectRatio="xMidYMid slice">
          
          {/* ====================== SVG DEFINITIONS (PRO VIP) ====================== */}
          <defs>
            {/* Glow Filter - Optimized */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation={isLowPerf ? "4" : "8"} result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Soft Glow */}
            <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Fog / Mist Filter - Disabled on Low Perf */}
            {!isLowPerf && (
              <filter id="fog">
                <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" seed="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
              </filter>
            )}

            {/* Noise Texture */}
            <filter id="noiseTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>

            {/* Terrain gradient - Lòng chảo Mường Thanh */}
            <radialGradient id="valleyGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a2a1a" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#0f1f0f" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#1a1510" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#2a1f10" stopOpacity="0.3" />
            </radialGradient>

            {/* Mountain gradient */}
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3a2a1a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1a1510" stopOpacity="0.1" />
            </linearGradient>

            {/* River glow */}
            <filter id="riverGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="#4ade80" floodOpacity="0.3" />
              <feComposite in2="blur" operator="in" result="glowBlur" />
              <feComposite in="SourceGraphic" in2="glowBlur" operator="over" />
            </filter>

            {/* Barbed wire pattern */}
            <pattern id="barbedWire" patternUnits="userSpaceOnUse" width="12" height="6">
              <path d="M0 3 L3 1 L6 3 L9 5 L12 3" stroke="#fbbf24" strokeWidth="0.8" fill="none" opacity="0.5" />
              <circle cx="3" cy="1" r="0.5" fill="#fbbf24" opacity="0.5" />
              <circle cx="9" cy="5" r="0.5" fill="#fbbf24" opacity="0.5" />
            </pattern>

            {/* Minefield pattern */}
            <pattern id="minefield" patternUnits="userSpaceOnUse" width="20" height="20">
              <text x="10" y="12" textAnchor="middle" fontSize="6" fill="#fbbf24" opacity="0.25">✕</text>
            </pattern>

            {/* Tree pattern for forest */}
            <pattern id="forestPattern" patternUnits="userSpaceOnUse" width="30" height="30">
              <polygon points="15,5 10,18 20,18" fill="#2d5a27" opacity="0.4" />
              <polygon points="7,12 3,25 11,25" fill="#1a4a14" opacity="0.3" />
              <polygon points="23,10 19,23 27,23" fill="#2d5a27" opacity="0.35" />
            </pattern>

            {/* Radar sweep gradient */}
            <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>

            {/* Artillery range rings */}
            <radialGradient id="artilleryRange" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e11d48" stopOpacity="0" />
              <stop offset="85%" stopColor="#e11d48" stopOpacity="0" />
              <stop offset="95%" stopColor="#e11d48" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
            </radialGradient>

            {/* Explosion glow - Simplified for Low Perf */}
            <filter id="explosionGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={isLowPerf ? "6" : "12"} result="blur" />
              <feFlood floodColor="#ff4500" floodOpacity="0.6" />
              <feComposite in2="blur" operator="in" result="glowBlur" />
              <feComposite in="SourceGraphic" in2="glowBlur" operator="over" />
            </filter>
          </defs>

          <motion.g 
            animate={{ rotate: rotation }} 
            style={{ 
              originX: "600px", 
              originY: "450px",
              willChange: "transform"
            }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
          
          {/* ====================== LAYER 0: TERRAIN BASE ====================== */}
          {/* Lòng chảo Mường Thanh - Valley depression */}
          <ellipse cx="600" cy="450" rx="500" ry="380" fill="url(#valleyGradient)" />

          {/* Noise texture overlay for terrain roughness */}
          <rect width="1200" height="900" fill="url(#noiseTexture)" opacity="0.03" style={{ mixBlendMode: 'overlay' }} />

          {/* ====================== LAYER 1: GRID (Tọa độ quân sự) ====================== */}
          <g opacity="0.06" stroke="#D4AF37" strokeWidth="0.3">
            {[...Array(25)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="900" />
            ))}
            {[...Array(19)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 50} x2="1200" y2={i * 50} />
            ))}
          </g>
          {/* Grid coordinates */}
          <g opacity="0.08" fill="#D4AF37" fontSize="7" fontFamily="monospace">
            {['A','B','C','D','E','F','G','H','I','J','K','L'].map((letter, i) => (
              <text key={`coord-${letter}`} x={i * 100 + 50} y="15" textAnchor="middle">{letter}</text>
            ))}
            {[...Array(9)].map((_, i) => (
              <text key={`num-${i}`} x="8" y={i * 100 + 55} textAnchor="start">{i + 1}</text>
            ))}
          </g>

          {/* ====================== LAYER 2: MOUNTAIN CONTOURS (Đường đồng mức) ====================== */}
          <g opacity="0.12" stroke="#D4AF37" fill="none" strokeWidth="0.4">
            {/* Đồi phía Bắc (Him Lam, Độc Lập) */}
            <path d="M 50 80 Q 200 30 350 120 T 550 80 T 750 130" />
            <path d="M 30 120 Q 180 70 330 160 T 530 120 T 730 170" />
            <path d="M 10 160 Q 160 110 310 200 T 510 160 T 710 210" />
            <path d="M -10 200 Q 140 150 290 240 T 490 200 T 690 250" />
            
            {/* Đồi phía Đông (Eliane / Đồi A1, C1, D1) */}
            <path d="M 900 150 Q 1000 100 1100 200 T 1250 180" />
            <path d="M 880 190 Q 980 140 1080 240 T 1230 220" />
            <path d="M 860 230 Q 960 180 1060 280 T 1210 260" />
            
            {/* Đồi phía Tây (Anne-Marie / Gabrielle) */}
            <path d="M -50 350 Q 50 280 150 380 T 300 350" />
            <path d="M -30 390 Q 70 320 170 420 T 320 390" />
            
            {/* Đồi phía Nam (Isabelle) */}
            <path d="M 200 750 Q 400 680 600 800 T 900 720" />
            <path d="M 220 790 Q 420 720 620 840 T 920 760" />
            <path d="M 240 830 Q 440 760 640 880 T 940 800" />
            
            {/* Đồi C1, D1 area */}
            <path d="M 750 400 Q 820 350 900 420 T 1000 380" />
            <path d="M 730 440 Q 800 390 880 460 T 980 420" />
          </g>

          {/* ====================== LAYER 3: FOREST / VEGETATION ====================== */}
          {/* Rừng phía Bắc */}
          <path d="M 0 0 Q 100 50 200 30 L 350 100 Q 250 200 150 180 L 50 120 Z" fill="url(#forestPattern)" opacity="0.5" />
          <path d="M 0 0 Q 100 50 200 30 L 350 100 Q 250 200 150 180 L 50 120 Z" fill="#1a3a1a" opacity="0.08" />
          
          {/* Rừng Đông Bắc */}
          <path d="M 800 0 L 1000 50 Q 1100 100 1050 200 L 900 170 Q 850 100 800 80 Z" fill="url(#forestPattern)" opacity="0.5" />
          <path d="M 800 0 L 1000 50 Q 1100 100 1050 200 L 900 170 Q 850 100 800 80 Z" fill="#1a3a1a" opacity="0.08" />
          
          {/* Rừng phía Tây */}
          <path d="M 0 250 Q 50 300 100 280 L 180 350 Q 130 450 80 420 L 0 380 Z" fill="url(#forestPattern)" opacity="0.45" />
          <path d="M 0 250 Q 50 300 100 280 L 180 350 Q 130 450 80 420 L 0 380 Z" fill="#1a3a1a" opacity="0.06" />
          
          {/* Rừng Đông */}
          <path d="M 1050 250 L 1200 300 L 1200 550 Q 1100 500 1000 450 L 1050 350 Z" fill="url(#forestPattern)" opacity="0.5" />
          <path d="M 1050 250 L 1200 300 L 1200 550 Q 1100 500 1000 450 L 1050 350 Z" fill="#1a3a1a" opacity="0.08" />
          
          {/* Rừng phía Nam */}
          <path d="M 0 700 L 200 650 Q 300 700 250 800 L 100 850 L 0 900 Z" fill="url(#forestPattern)" opacity="0.45" />
          <path d="M 900 700 L 1100 750 Q 1200 800 1200 900 L 1000 900 Q 950 800 900 750 Z" fill="url(#forestPattern)" opacity="0.5" />

          {/* ====================== LAYER 4: SÔNG NẬM RỐM (River System) ====================== */}
          <g filter="url(#riverGlow)">
            {/* Main river */}
            <path d="M 420 -20 Q 460 100 500 250 Q 540 350 560 420 Q 580 500 570 580 Q 550 680 520 800 Q 510 850 500 920" 
              stroke="#4ade80" fill="none" strokeWidth="10" opacity="0.25" strokeLinecap="round" />
            <path d="M 420 -20 Q 460 100 500 250 Q 540 350 560 420 Q 580 500 570 580 Q 550 680 520 800 Q 510 850 500 920" 
              stroke="#4ade80" fill="none" strokeWidth="4" opacity="0.5" strokeLinecap="round" />
            <path d="M 420 -20 Q 460 100 500 250 Q 540 350 560 420 Q 580 500 570 580 Q 550 680 520 800 Q 510 850 500 920" 
              stroke="#86efac" fill="none" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
            
            {/* Nhánh phụ phía Bắc */}
            <path d="M 300 50 Q 350 120 420 180 Q 460 220 490 260" 
              stroke="#4ade80" fill="none" strokeWidth="4" opacity="0.2" strokeLinecap="round" />
            <path d="M 300 50 Q 350 120 420 180 Q 460 220 490 260" 
              stroke="#86efac" fill="none" strokeWidth="1" opacity="0.35" strokeLinecap="round" />
              
            {/* Nhánh phụ phía Nam */}
            <path d="M 570 580 Q 620 620 680 650 Q 720 670 750 680" 
              stroke="#4ade80" fill="none" strokeWidth="3" opacity="0.15" strokeLinecap="round" />
          </g>

          {/* ====================== LAYER 5: SÂN BAY MƯỜNG THANH (Expanded) ====================== */}
          <g transform="translate(475, 310) rotate(-18)">
            {/* Runway body */}
            <rect width="280" height="50" rx="3" fill="#0a0a0a" stroke="#D4AF37" strokeWidth="1.2" opacity="0.7" />
            
            {/* Center line */}
            <line x1="20" y1="25" x2="260" y2="25" stroke="#fff" strokeWidth="1.2" strokeDasharray="18 12" opacity="0.5" />
            
            {/* Threshold markings */}
            <g opacity="0.4">
              <line x1="10" y1="12" x2="10" y2="38" stroke="#fff" strokeWidth="1" />
              <line x1="15" y1="12" x2="15" y2="38" stroke="#fff" strokeWidth="1" />
              <line x1="265" y1="12" x2="265" y2="38" stroke="#fff" strokeWidth="1" />
              <line x1="270" y1="12" x2="270" y2="38" stroke="#fff" strokeWidth="1" />
            </g>
            
            {/* Taxiway */}
            <path d="M 140 50 L 140 80 L 200 80 L 200 50" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.35" />
            
            {/* Shelter areas */}
            <rect x="150" y="75" width="40" height="20" rx="2" fill="#111" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            
            {/* Label */}
            <motion.text 
              x="140" y="18" 
              fill="#D4AF37" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.45" letterSpacing="2"
              style={{ originX: '140px', originY: '18px' }}
              animate={{ rotate: -rotation + 18 }}
            >
              AÉRODROME DE MUONG THANH
            </motion.text>
          </g>

          {/* ====================== LAYER 6: TRẬN ĐỊA PHÁP (French Defense System) ====================== */}
          {/* Hệ thống phòng thủ nhiều lớp */}
          
          {/* Outer perimeter - Kẽm gai vòng ngoài */}
          <ellipse cx="580" cy="420" rx="260" ry="210" fill="none" stroke="url(#barbedWire)" strokeWidth="6" opacity="0.25" />
          
          {/* Middle perimeter */}
          <ellipse cx="580" cy="420" rx="200" ry="160" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="8 4" opacity="0.15" />
          
          {/* Inner perimeter - Trung tâm Mường Thanh */}
          <ellipse cx="580" cy="420" rx="140" ry="110" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
          <ellipse cx="580" cy="420" rx="140" ry="110" fill="#D4AF37" opacity="0.02" />
          
          {/* Hầm chỉ huy De Castries */}
          <g transform="translate(560, 400)">
            <rect width="40" height="40" rx="3" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.4" />
            <line x1="0" y1="0" x2="40" y2="40" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            <line x1="40" y1="0" x2="0" y2="40" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            <motion.text 
              x="20" y="-8" fill="#D4AF37" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.4" letterSpacing="1"
              style={{ originX: '20px', originY: '-8px' }}
              animate={{ rotate: -rotation }}
            >
              HQ DE CASTRIES
            </motion.text>
          </g>
          
          {/* Minefield zones */}
          <ellipse cx="580" cy="420" rx="230" ry="185" fill="url(#minefield)" opacity="0.15" />
          
          {/* Bunker positions around perimeter */}
          {[
            { x: 420, y: 350 }, { x: 450, y: 280 }, { x: 550, y: 250 },
            { x: 680, y: 270 }, { x: 740, y: 350 }, { x: 760, y: 450 },
            { x: 720, y: 540 }, { x: 630, y: 580 }, { x: 510, y: 570 },
            { x: 400, y: 500 }, { x: 380, y: 420 },
          ].map((pos, i) => (
            <g key={`bunker-${i}`} opacity="0.2">
              <rect x={pos.x - 4} y={pos.y - 3} width="8" height="6" fill="#333" stroke="#D4AF37" strokeWidth="0.5" rx="1" />
            </g>
          ))}

          {/* ====================== LAYER 7: ĐƯỜNG VẬN TẢI VIỆT MINH ====================== */}
          {/* Đường tiếp viện từ phía Bắc */}
          <path d="M 100 0 Q 150 80 200 150 Q 280 250 350 300 Q 400 340 430 370" 
            stroke="#fb923c" fill="none" strokeWidth="2" strokeDasharray="8 4" opacity="0.2" />
          
          {/* Đường tiếp viện từ phía Đông */}
          <path d="M 1200 200 Q 1100 280 1000 350 Q 900 400 820 430" 
            stroke="#fb923c" fill="none" strokeWidth="2" strokeDasharray="8 4" opacity="0.2" />
          
          {/* Đường kéo pháo qua núi */}
          <path d="M 0 500 Q 100 480 200 460 Q 300 440 380 430" 
            stroke="#fb923c" fill="none" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.25" />
          <motion.text 
            x="150" y="465" fill="#fb923c" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.3" letterSpacing="1"
            style={{ originX: '150px', originY: '465px' }}
            animate={{ rotate: -rotation }}
          >
            ĐƯỜNG KÉO PHÁO
          </motion.text>

          {/* ====================== LAYER 8: TRẬN ĐỊA PHÁO BINH VIỆT MINH ====================== */}
          {/* Vị trí pháo trong hang núi */}
          {[
            { x: 80, y: 350, label: 'Trận địa pháo' },
            { x: 120, y: 500, label: '' },
            { x: 60, y: 450, label: '' },
          ].map((pos, i) => (
            <g key={`artillery-${i}`} opacity="0.25">
              <circle cx={pos.x} cy={pos.y} r="8" fill="none" stroke="#10b981" strokeWidth="1" />
              <line x1={pos.x - 3} y1={pos.y} x2={pos.x + 3} y2={pos.y} stroke="#10b981" strokeWidth="1" />
              <line x1={pos.x} y1={pos.y - 3} x2={pos.x} y2={pos.y + 3} stroke="#10b981" strokeWidth="1" />
              {pos.label && (
                <motion.text 
                  x={pos.x + 15} y={pos.y + 4} fill="#10b981" fontSize="6" fontFamily="monospace" opacity="0.5"
                  style={{ originX: `${pos.x + 15}px`, originY: `${pos.y + 4}px` }}
                  animate={{ rotate: -rotation }}
                >
                  {pos.label}
                </motion.text>
              )}
            </g>
          ))}
          
          {/* Artillery range indicator */}
          <circle cx="80" cy="420" r="350" fill="url(#artilleryRange)" opacity="0.3" />

          {/* ====================== LAYER 9: GIAO THÔNG HÀO (Trench System) ====================== */}
          <g opacity="0.3" stroke="#e11d48" fill="none" strokeWidth="2" className="animated-trench">
            {/* Hào vây lấn Đợt 1 (Từ Bắc) */}
            <path d="M 350 180 Q 400 220 450 240 Q 500 260 540 290" />
            <path d="M 680 200 Q 650 240 630 270 Q 620 290 610 310" />
            
            {/* Hào vây lấn Đợt 2 (Từ Đông) */}
            <path d="M 900 350 Q 850 380 800 400 Q 770 420 750 440" />
            <path d="M 850 500 Q 800 520 750 530 Q 700 540 670 550" />
            
            {/* Hào vây lấn Đợt 3 (Từ nhiều hướng) */}
            <path d="M 400 600 Q 450 580 500 560 Q 530 550 560 540" />
            <path d="M 200 400 Q 250 410 300 400 Q 350 390 400 400" />
            
            {/* Hào nối liên kết */}
            <path d="M 540 290 Q 560 310 570 340" strokeDasharray="4 3" strokeWidth="1.5" />
            <path d="M 750 440 Q 720 460 700 480" strokeDasharray="4 3" strokeWidth="1.5" />
          </g>

          {/* ====================== LAYER 10: RADAR SWEEP ====================== */}
          <motion.circle 
            cx="600" cy="450" r="380" 
            fill="url(#radarSweep)" 
            opacity="0.08"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ originX: "600px", originY: "450px" }}
          />

          {/* Radar scan line */}
          <motion.line
            x1="600" y1="450" x2="600" y2="70"
            stroke="#10b981" strokeWidth="1" opacity="0.1"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ originX: "600px", originY: "450px" }}
          />

          {/* ====================== LAYER 11: TACTICAL ATTACK ARROWS ====================== */}
          <AnimatePresence>
            {currentPhase.arrows.map((arrow, index) => (
              <motion.g key={`arrow-group-${index}-${currentPhase.date}`}>
                {/* Glow trail */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.15 }}
                  d={`M ${arrow.from[0]},${arrow.from[1]} L ${arrow.to[0]},${arrow.to[1]}`}
                  stroke="#e11d48"
                  strokeWidth="16"
                  filter="url(#glow)"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Main arrow */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d={`M ${arrow.from[0]},${arrow.from[1]} L ${arrow.to[0]},${arrow.to[1]}`}
                  stroke="#e11d48"
                  strokeWidth="4"
                  className="animated-dashed-line"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Arrow head */}
                <motion.circle
                  cx={arrow.to[0]} cy={arrow.to[1]} r="5"
                  fill="#e11d48" opacity="0.8"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.g>
            ))}
          </AnimatePresence>

          {/* ====================== LAYER 12: FORTRESS MARKERS (Cứ điểm) ====================== */}
          {activeTab === 'military' && currentPhase.markers.map((marker) => (
            <motion.g
              key={marker.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer group"
              onClick={() => onMarkerClick(marker)}
            >
              {/* Outer glow ring */}
              <circle cx={marker.x} cy={marker.y} r="30" 
                fill={marker.status === 'captured' ? '#10b981' : '#e11d48'} 
                opacity="0.08" 
                filter="url(#glow)" 
              />
              
              {/* Defense ring */}
              <circle cx={marker.x} cy={marker.y} r="22" 
                fill="none"
                stroke={marker.status === 'captured' ? '#10b981' : '#e11d48'} 
                strokeWidth="0.8" 
                strokeDasharray="3 2"
                opacity="0.4" 
              />

              {/* Core hexagon */}
              <polygon 
                points={`${marker.x},${marker.y-14} ${marker.x+12},${marker.y-7} ${marker.x+12},${marker.y+7} ${marker.x},${marker.y+14} ${marker.x-12},${marker.y+7} ${marker.x-12},${marker.y-7}`}
                fill={marker.status === 'captured' ? '#10b981' : '#e11d48'}
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.5"
                className={marker.status === 'under-attack' ? 'animate-pulse' : ''}
              />
              
              {/* Inner cross for military precision */}
              <line x1={marker.x - 5} y1={marker.y} x2={marker.x + 5} y2={marker.y} stroke="#fff" strokeWidth="1" opacity="0.6" />
              <line x1={marker.x} y1={marker.y - 5} x2={marker.x} y2={marker.y + 5} stroke="#fff" strokeWidth="1" opacity="0.6" />

              {/* Ping animation for active targets */}
              {marker.status === 'under-attack' && (
                <>
                  <circle cx={marker.x} cy={marker.y} r="14" fill="none" stroke="#e11d48" strokeWidth="2">
                    <animate attributeName="r" from="14" to="45" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={marker.x} cy={marker.y} r="14" fill="none" stroke="#ff6b35" strokeWidth="1">
                    <animate attributeName="r" from="14" to="35" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </>
              )}

              {/* Label with counter-rotate */}
              <motion.text
                x={marker.x}
                y={marker.y - 28}
                textAnchor="middle"
                className="text-[13px] font-bold fill-white font-body tracking-[0.15em] uppercase pointer-events-none"
                style={{ 
                  textShadow: "0px 2px 10px rgba(0,0,0,1)",
                  originX: `${marker.x}px`,
                  originY: `${marker.y - 28}px`
                }}
                animate={{ rotate: -rotation }}
                paintOrder="stroke" 
                stroke="#000" 
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {marker.name}
              </motion.text>
            </motion.g>
          ))}

          {/* ====================== LAYER 13: HERO MARKERS ====================== */}
          {activeTab === 'heroes' && currentPhase.heroes?.map((hero) => (
            <motion.g
              key={hero.id}
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
              onClick={() => onHeroClick(hero)}
            >
              <circle cx={hero.x} cy={hero.y} r="35" fill="#D4AF37" opacity="0.1" filter="url(#glow)" />
              <circle cx={hero.x} cy={hero.y} r="20" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
              
              {/* Star marker */}
              <polygon 
                points={`${hero.x},${hero.y-12} ${hero.x+3},${hero.y-3} ${hero.x+12},${hero.y-3} ${hero.x+5},${hero.y+4} ${hero.x+7},${hero.y+13} ${hero.x},${hero.y+7} ${hero.x-7},${hero.y+13} ${hero.x-5},${hero.y+4} ${hero.x-12},${hero.y-3} ${hero.x-3},${hero.y-3}`}
                fill="#D4AF37" 
                stroke="#fff" strokeWidth="1"
              />
              
              {/* Label */}
              <motion.text
                x={hero.x}
                y={hero.y - 28}
                textAnchor="middle"
                className="text-[13px] font-bold fill-[#D4AF37] font-body tracking-widest uppercase pointer-events-none"
                style={{ 
                  textShadow: "0px 2px 10px rgba(0,0,0,1)",
                  originX: `${hero.x}px`,
                  originY: `${hero.y - 28}px`
                }}
                animate={{ rotate: -rotation }}
                paintOrder="stroke" 
                stroke="#111" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {hero.name}
              </motion.text>
            </motion.g>
          ))}
          
          {/* ====================== LAYER 14: FOG OF WAR ====================== */}
          {/* Sương mù nhẹ ven rìa chiến trường */}
          <motion.ellipse
            cx="100" cy="200" rx="200" ry="150"
            fill="#0a1a0a" opacity="0.08"
            animate={{ rx: [200, 220, 200], ry: [150, 170, 150] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="1100" cy="700" rx="180" ry="130"
            fill="#0a1a0a" opacity="0.06"
            animate={{ rx: [180, 200, 180], ry: [130, 150, 130] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          </motion.g>

          {/* ====================== INLINE STYLES ====================== */}
          <style dangerouslySetInnerHTML={{__html: `
            .animated-trench path {
               stroke-dasharray: 1000;
               stroke-dashoffset: 1000;
               animation: drawTrench 10s linear infinite alternate;
            }
            @keyframes drawTrench {
               from { stroke-dashoffset: 1000; }
               to { stroke-dashoffset: 0; }
            }
            .animated-dashed-line {
               stroke-dasharray: 12 6;
               animation: dashMove 2s linear infinite;
            }
            @keyframes dashMove {
               to { stroke-dashoffset: -36; }
            }
          `}} />
        </svg>
      </div>
    </div>
  );
});

export default InteractiveMap;
