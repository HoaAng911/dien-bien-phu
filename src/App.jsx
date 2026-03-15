import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Eye, EyeOff, LayoutGrid } from 'lucide-react'
import { DIEN_BIEN_PHU_PHASES } from './data/index'

import InteractiveMap from './components/InteractiveMap'
import HeroScreen from './components/screens/HeroScreen'
import LegacyScreen from './components/screens/LegacyScreen'
import WarRoomHeader from './components/war-room/WarRoomHeader'
import IntelligenceSidebar from './components/war-room/IntelligenceSidebar'
import DetailsPopover from './components/war-room/DetailsPopover'
import TimelineFooter from './components/war-room/TimelineFooter'
import OverviewPanel from './components/war-room/OverviewPanel'

const LayerToggleButton = ({ active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${active ? 'bg-[var(--color-gold)]/20 border-[var(--color-gold)]/50 text-[var(--color-gold)]' : 'bg-transparent border-white/10 text-white/40 hover:text-white/60'}`}
  >
    {label}
  </button>
);

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [selectedHero, setSelectedHero] = useState(null)
  const [activeTab, setActiveTab] = useState('overview') 
  const [showLegacy, setShowLegacy] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [uiSettings, setUiSettings] = useState({
    header: true,
    sidebar: true,
    footer: true,
    legend: false // Mặc định ẩn trên mobile, hiện trên desktop (logic sẽ xử lý sau)
  })

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentPhase = DIEN_BIEN_PHU_PHASES[phaseIndex]

  const nextPhase = () => {
    if (phaseIndex < DIEN_BIEN_PHU_PHASES.length - 1) {
      setPhaseIndex(phaseIndex + 1)
      setSelectedMarker(null)
      setSelectedHero(null)
    } else {
      setShowLegacy(true)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--color-obsidian)] text-gray-100 font-body selection:bg-[var(--color-gold)] selection:text-black">
      <AnimatePresence mode="wait">
        {!isStarted ? (
          <HeroScreen onStart={() => setIsStarted(true)} />
        ) : showLegacy ? (
          <LegacyScreen onRestart={() => { setShowLegacy(false); setPhaseIndex(0); }} />
        ) : (
          <motion.div 
            key="interface-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen w-screen relative bg-[var(--color-obsidian)]"
          >
            {/* FULL SCREEN SVG MAP BACKGROUND */}
            <div className="absolute inset-0 topographic-bg"></div>
            <div className="absolute inset-0 bg-black/50 pointer-events-none backdrop-blur-[2px]"></div>
            
            <InteractiveMap 
              currentPhase={currentPhase}
              activeTab={activeTab}
              onMarkerClick={(m) => { setSelectedMarker(m); setSelectedHero(null); }}
              onHeroClick={(h) => { setSelectedHero(h); setSelectedMarker(null); }}
              showLegend={uiSettings.legend}
            />

            <AnimatePresence>
              {uiSettings.header && (
                <motion.div
                  key="header-layer"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="z-50 pointer-events-none absolute inset-x-0 top-0"
                >
                  <div className="pointer-events-auto">
                    <WarRoomHeader 
                      activeTab={activeTab} setActiveTab={setActiveTab}
                      isMuted={isMuted} setIsMuted={setIsMuted}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              {activeTab === 'overview' ? (
                uiSettings.sidebar && <OverviewPanel />
              ) : (
                <>
                  <AnimatePresence>
                    {uiSettings.sidebar && (
                      <motion.div
                        key="sidebar-layer"
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -400, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="z-20 pointer-events-none absolute inset-y-0 left-0"
                      >
                        <div className="pointer-events-auto h-full flex flex-col justify-center">
                          <IntelligenceSidebar 
                            currentPhase={currentPhase} 
                            phaseIndex={phaseIndex} 
                            activeTab={activeTab}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <DetailsPopover 
                    selectedMarker={selectedMarker} 
                    selectedHero={selectedHero} 
                    onClose={() => { setSelectedMarker(null); setSelectedHero(null); }} 
                  />
                </>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {uiSettings.footer && (
                <motion.div
                  key="footer-layer"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="z-30 pointer-events-none absolute inset-x-0 bottom-0"
                >
                  <div className="pointer-events-auto">
                    <TimelineFooter 
                      phaseIndex={phaseIndex} 
                      setPhaseIndex={setPhaseIndex} 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Advance Button */}
            <AnimatePresence>
              {uiSettings.footer && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className={`absolute ${isMobile ? 'bottom-6 right-6' : 'bottom-32 right-6'} z-[60]`}
                >
                   <button 
                      onClick={nextPhase}
                      className={`px-4 md:px-6 py-2 md:py-3 glass-panel rounded-lg border border-[var(--color-gold)]/30 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all flex items-center gap-3 text-[var(--color-gold)] group shadow-xl`}
                    >
                      {phaseIndex < DIEN_BIEN_PHU_PHASES.length - 1 ? (
                        <>{isMobile ? 'Kế Tiếp' : 'Tác Chiến Kế Tiếp'} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
                      ) : (
                        "Kết Thúc"
                      )}
                    </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CONTROL PANEL - Toggle Layers */}
            <div className={`absolute ${isMobile ? 'bottom-6 left-6' : 'bottom-32 left-6'} z-[70] flex flex-col-reverse gap-3`}>
              <button 
                className={`w-10 h-10 md:w-12 md:h-12 glass-panel rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] hover:bg-white/5 transition-all ${(!uiSettings.header && !uiSettings.sidebar && !uiSettings.footer) ? 'bg-[var(--color-gold)]/20' : ''}`}
                title="Chế độ tập trung"
                onClick={() => {
                  const isFocus = uiSettings.header || uiSettings.sidebar || uiSettings.footer;
                  setUiSettings({
                    header: !isFocus,
                    sidebar: !isFocus,
                    footer: !isFocus,
                    legend: uiSettings.legend
                  });
                }}
              >
                {(!uiSettings.header && !uiSettings.sidebar && !uiSettings.footer) ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>

              <AnimatePresence>
                {uiSettings.header || uiSettings.sidebar || uiSettings.footer ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="flex flex-col gap-2 p-2 glass-panel rounded-xl border border-white/10 shadow-2xl"
                  >
                    <LayerToggleButton 
                      active={uiSettings.header} 
                      onClick={() => setUiSettings(s => ({...s, header: !s.header}))}
                      label="Header"
                    />
                    <LayerToggleButton 
                      active={uiSettings.sidebar} 
                      onClick={() => setUiSettings(s => ({...s, sidebar: !s.sidebar}))}
                      label="Sidebar"
                    />
                    <LayerToggleButton 
                      active={uiSettings.footer} 
                      onClick={() => setUiSettings(s => ({...s, footer: !s.footer}))}
                      label="Timeline"
                    />
                    <LayerToggleButton 
                      active={uiSettings.legend} 
                      onClick={() => setUiSettings(s => ({...s, legend: !s.legend}))}
                      label="Legend"
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
              .slider-custom::-webkit-slider-thumb {
                appearance: none;
                width: 40px;
                height: 40px;
                background: transparent;
                cursor: pointer;
              }
            `}} />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
