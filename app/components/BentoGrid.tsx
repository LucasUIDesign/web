'use client'

import { motion } from 'framer-motion'

// ═══════════════════════════════════════════
// ANIMATED DEMOS - VFX for each feature
// ═══════════════════════════════════════════

function AimbotDemo() {
  return (
    <div className="relative h-28 sm:h-32 rounded-xl bg-black/40 border border-[#00FFD1]/10 overflow-hidden" aria-hidden="true">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0,255,209,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.3) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      <svg viewBox="0 0 280 120" className="w-full h-full">
        {/* Moving target */}
        <motion.circle
          cx="140" cy="60" r="6"
          fill="#FF4444"
          filter="url(#targetGlow)"
          animate={{
            cx: [80, 200, 140, 60, 220, 140],
            cy: [40, 80, 30, 70, 50, 60]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Target outer ring */}
        <motion.circle
          cx="140" cy="60" r="12"
          fill="none" stroke="#FF4444" strokeWidth="1" strokeDasharray="3 3"
          opacity="0.5"
          animate={{
            cx: [80, 200, 140, 60, 220, 140],
            cy: [40, 80, 30, 70, 50, 60],
            r: [12, 14, 12]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Prediction trajectory line */}
        <motion.line
          x1="140" y1="60" x2="140" y2="60"
          stroke="#00FFD1" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
          animate={{
            x1: [80, 200, 140, 60, 220, 140],
            y1: [40, 80, 30, 70, 50, 60],
            x2: [200, 140, 60, 220, 140, 80],
            y2: [80, 30, 70, 50, 60, 40]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Crosshair - tracks target with slight delay */}
        <motion.g
          animate={{
            x: [80 - 140, 200 - 140, 140 - 140, 60 - 140, 220 - 140, 140 - 140],
            y: [40 - 60, 80 - 60, 30 - 60, 70 - 60, 50 - 60, 60 - 60]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
        >
          {/* Crosshair lines */}
          <line x1="140" y1="42" x2="140" y2="54" stroke="#00FFD1" strokeWidth="1.5" />
          <line x1="140" y1="66" x2="140" y2="78" stroke="#00FFD1" strokeWidth="1.5" />
          <line x1="122" y1="60" x2="134" y2="60" stroke="#00FFD1" strokeWidth="1.5" />
          <line x1="146" y1="60" x2="158" y2="60" stroke="#00FFD1" strokeWidth="1.5" />
          {/* Crosshair circle */}
          <motion.circle
            cx="140" cy="60" r="16"
            fill="none" stroke="#00FFD1" strokeWidth="1"
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 0.95, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {/* Inner dot */}
          <motion.circle
            cx="140" cy="60" r="2"
            fill="#00FFD1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.g>

        {/* LOCKED text flash */}
        <motion.text
          x="140" y="105" textAnchor="middle"
          fill="#00FFD1" fontSize="8" fontFamily="monospace" fontWeight="bold"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.7, 1] }}
        >
          ● TARGET LOCKED
        </motion.text>

        <defs>
          <filter id="targetGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

function WallhackDemo() {
  return (
    <div className="relative h-28 sm:h-32 rounded-xl bg-black/40 border border-[#7B61FF]/10 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 280 120" className="w-full h-full">
        <rect x="0" y="0" width="280" height="120" fill="#080C12" />

        {/* Left side - "your view" */}
        <rect x="5" y="10" width="90" height="100" rx="4" fill="#0A1628" stroke="#7B61FF" strokeWidth="0.5" opacity="0.5" />
        <text x="50" y="22" textAnchor="middle" fill="#7B61FF" fontSize="6" fontFamily="monospace" opacity="0.6">YOUR VIEW</text>

        {/* Wall in the middle */}
        <rect x="110" y="5" width="60" height="110" fill="#1a1a2e" stroke="#333" strokeWidth="1" />
        <text x="140" y="65" textAnchor="middle" fill="#444" fontSize="7" fontFamily="monospace">WALL</text>
        <line x1="115" y1="30" x2="165" y2="30" stroke="#222" strokeWidth="0.5" />
        <line x1="115" y1="55" x2="165" y2="55" stroke="#222" strokeWidth="0.5" />
        <line x1="115" y1="80" x2="165" y2="80" stroke="#222" strokeWidth="0.5" />
        <line x1="140" y1="5" x2="140" y2="115" stroke="#222" strokeWidth="0.5" />

        {/* Right side */}
        <rect x="185" y="10" width="90" height="100" rx="4" fill="#0A1628" stroke="#7B61FF" strokeWidth="0.5" opacity="0.5" />

        {/* Enemy figure behind wall (X-ray) */}
        <motion.g animate={{ y: [0, -5, 0, 3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <motion.ellipse cx="230" cy="50" rx="8" ry="12"
            fill="none" stroke="#FF4444" strokeWidth="1.5"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle cx="230" cy="35" r="6"
            fill="none" stroke="#FF4444" strokeWidth="1.5"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <rect x="218" y="65" width="24" height="3" rx="1" fill="#333" />
          <motion.rect x="218" y="65" width="24" height="3" rx="1" fill="#FF4444"
            animate={{ width: [24, 16, 24] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <text x="230" y="78" textAnchor="middle" fill="#FF6666" fontSize="6" fontFamily="monospace">ENEMY</text>
        </motion.g>

        {/* X-ray vision lines */}
        <motion.line x1="50" y1="55" x2="230" y2="45"
          stroke="#7B61FF" strokeWidth="0.8" strokeDasharray="4 4"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line x1="50" y1="60" x2="230" y2="50"
          stroke="#00FFD1" strokeWidth="0.5" strokeDasharray="2 6"
          animate={{ opacity: [0, 0.4, 0], strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Scan line */}
        <motion.rect x="0" y="0" width="280" height="2"
          fill="url(#scanGrad)"
          animate={{ y: [0, 120] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Wall glow */}
        <motion.rect x="110" y="5" width="60" height="110"
          fill="none" stroke="#7B61FF" strokeWidth="1"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* DETECTED label */}
        <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}>
          <rect x="195" y="88" width="70" height="14" rx="2" fill="#FF4444" opacity="0.2" />
          <text x="230" y="98" textAnchor="middle" fill="#FF6666" fontSize="7" fontFamily="monospace" fontWeight="bold">DETECTED</text>
        </motion.g>

        <defs>
          <linearGradient id="scanGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(123,97,255,0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ESPDemo() {
  return (
    <div className="relative h-28 sm:h-32 rounded-xl bg-black/40 border border-[#00B4D8]/10 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 280 120" className="w-full h-full">
        <rect x="0" y="0" width="280" height="120" fill="#060A10" />

        {/* Player 1 - Friendly */}
        <g>
          <motion.rect x="30" y="20" width="30" height="55" rx="2"
            fill="none" stroke="#00FFD1" strokeWidth="1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="45" cy="28" r="5" fill="none" stroke="#00FFD1" strokeWidth="0.8" />
          <line x1="45" y1="33" x2="45" y2="55" stroke="#00FFD1" strokeWidth="0.8" />
          <text x="45" y="16" textAnchor="middle" fill="#00FFD1" fontSize="6" fontFamily="monospace">JETT</text>
          <rect x="30" y="78" width="30" height="3" rx="1" fill="#1a1a1a" />
          <motion.rect x="30" y="78" width="30" height="3" rx="1" fill="#00FFD1"
            animate={{ width: [30, 22, 30] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <text x="45" y="90" textAnchor="middle" fill="#00FFD1" fontSize="5.5" fontFamily="monospace">150 HP</text>
          <text x="45" y="98" textAnchor="middle" fill="#888" fontSize="5" fontFamily="monospace">PHANTOM</text>
          <motion.text x="45" y="106" textAnchor="middle" fill="#00B4D8" fontSize="5" fontFamily="monospace"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            12.4m
          </motion.text>
        </g>

        {/* Player 2 - Enemy */}
        <g>
          <motion.rect x="170" y="15" width="28" height="50" rx="2"
            fill="none" stroke="#FF4444" strokeWidth="1"
            animate={{ opacity: [0.5, 1, 0.5], x: [170, 175, 170] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle cx="184" cy="23" r="5" fill="none" stroke="#FF4444" strokeWidth="0.8"
            animate={{ cx: [184, 189, 184] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line x1="184" y1="28" x2="184" y2="48" stroke="#FF4444" strokeWidth="0.8"
            animate={{ x1: [184, 189, 184], x2: [184, 189, 184] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.text x="184" y="11" textAnchor="middle" fill="#FF4444" fontSize="6" fontFamily="monospace"
            animate={{ x: [184, 189, 184] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            REYNA
          </motion.text>
          <rect x="170" y="70" width="28" height="3" rx="1" fill="#1a1a1a" />
          <motion.rect x="170" y="70" width="18" height="3" rx="1" fill="#FF4444"
            animate={{ width: [18, 10, 18] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <text x="184" y="82" textAnchor="middle" fill="#FF4444" fontSize="5.5" fontFamily="monospace">75 HP</text>
          <text x="184" y="90" textAnchor="middle" fill="#888" fontSize="5" fontFamily="monospace">VANDAL</text>
          <motion.text x="184" y="98" textAnchor="middle" fill="#FF6666" fontSize="5" fontFamily="monospace"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            28.7m
          </motion.text>
        </g>

        {/* Mini Radar */}
        <g>
          <circle cx="245" cy="25" r="18" fill="#0A1628" stroke="#00B4D8" strokeWidth="0.5" opacity="0.8" />
          <line x1="245" y1="7" x2="245" y2="43" stroke="#00B4D8" strokeWidth="0.3" opacity="0.3" />
          <line x1="227" y1="25" x2="263" y2="25" stroke="#00B4D8" strokeWidth="0.3" opacity="0.3" />
          <motion.line x1="245" y1="25" x2="263" y2="25"
            stroke="#00B4D8" strokeWidth="1"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '245px 25px' }}
          />
          <motion.circle cx="238" cy="18" r="2" fill="#00FFD1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle cx="255" cy="30" r="2" fill="#FF4444"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <text x="245" y="48" textAnchor="middle" fill="#00B4D8" fontSize="5" fontFamily="monospace">RADAR</text>
        </g>

        {/* HUD corners */}
        <path d="M5 15 L5 5 L15 5" fill="none" stroke="#00B4D8" strokeWidth="1" opacity="0.4" />
        <path d="M265 5 L275 5 L275 15" fill="none" stroke="#00B4D8" strokeWidth="1" opacity="0.4" />
        <path d="M5 105 L5 115 L15 115" fill="none" stroke="#00B4D8" strokeWidth="1" opacity="0.4" />
        <path d="M265 115 L275 115 L275 105" fill="none" stroke="#00B4D8" strokeWidth="1" opacity="0.4" />

        <motion.text x="140" y="115" textAnchor="middle" fill="#00B4D8" fontSize="5.5" fontFamily="monospace"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ESP ACTIVE ● 6 PLAYERS DETECTED
        </motion.text>
      </svg>
    </div>
  )
}

function AIDemo() {
  const inputY = [25, 45, 65, 85]
  const hiddenY = [17, 35, 53, 71, 89]
  const outputY = [30, 55, 80]

  return (
    <div className="relative h-28 sm:h-32 rounded-xl bg-black/40 border border-[#00FFD1]/10 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 280 120" className="w-full h-full">
        <rect x="0" y="0" width="280" height="120" fill="#060A10" />

        {/* Connections: Input → Hidden */}
        {inputY.map((iy, i) =>
          hiddenY.map((hy, j) => (
            <motion.line key={`ih-${i}-${j}`}
              x1="55" y1={iy} x2="135" y2={hy}
              stroke="#00FFD1" strokeWidth="0.4"
              animate={{ opacity: [0.03, 0.25, 0.03] }}
              transition={{ duration: 2, repeat: Infinity, delay: (i + j) * 0.1 }}
            />
          ))
        )}

        {/* Connections: Hidden → Output */}
        {hiddenY.map((hy, i) =>
          outputY.map((oy, j) => (
            <motion.line key={`ho-${i}-${j}`}
              x1="145" y1={hy} x2="225" y2={oy}
              stroke="#7B61FF" strokeWidth="0.4"
              animate={{ opacity: [0.03, 0.25, 0.03] }}
              transition={{ duration: 2, repeat: Infinity, delay: (i + j) * 0.12 + 0.5 }}
            />
          ))
        )}

        {/* Input layer nodes */}
        {inputY.map((y, i) => (
          <g key={`in-${i}`}>
            <motion.circle cx="50" cy={y} r="5" fill="#0A1628" stroke="#00FFD1" strokeWidth="1"
              animate={{ strokeOpacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
            <motion.circle cx="50" cy={y} r="2" fill="#00FFD1"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}

        {/* Hidden layer nodes */}
        {hiddenY.map((y, i) => (
          <g key={`hid-${i}`}>
            <motion.circle cx="140" cy={y} r="5" fill="#0A1628" stroke="#7B61FF" strokeWidth="1"
              animate={{ strokeOpacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 + 0.5 }}
            />
            <motion.circle cx="140" cy={y} r="2" fill="#7B61FF"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 + 0.5 }}
            />
          </g>
        ))}

        {/* Output layer nodes */}
        {outputY.map((y, i) => (
          <g key={`out-${i}`}>
            <motion.circle cx="230" cy={y} r="5" fill="#0A1628" stroke="#00B4D8" strokeWidth="1"
              animate={{ strokeOpacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 + 1 }}
            />
            <motion.circle cx="230" cy={y} r="2" fill="#00B4D8"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 + 1 }}
            />
          </g>
        ))}

        {/* Data pulses traveling along network */}
        <motion.circle r="2" fill="#00FFD1" filter="url(#pulseGlow)"
          animate={{ cx: [50, 140, 230], cy: [45, 35, 55], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle r="2" fill="#7B61FF" filter="url(#pulseGlow)"
          animate={{ cx: [50, 140, 230], cy: [65, 71, 30], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.circle r="2" fill="#00B4D8" filter="url(#pulseGlow)"
          animate={{ cx: [50, 140, 230], cy: [25, 53, 80], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />

        {/* Layer labels */}
        <text x="50" y="108" textAnchor="middle" fill="#00FFD1" fontSize="5" fontFamily="monospace" opacity="0.5">INPUT</text>
        <text x="140" y="108" textAnchor="middle" fill="#7B61FF" fontSize="5" fontFamily="monospace" opacity="0.5">PROCESS</text>
        <text x="230" y="108" textAnchor="middle" fill="#00B4D8" fontSize="5" fontFamily="monospace" opacity="0.5">OUTPUT</text>

        {/* LEARNING indicator */}
        <motion.g animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <rect x="100" y="1" width="80" height="12" rx="6" fill="#00FFD1" opacity="0.1" />
          <text x="140" y="9" textAnchor="middle" fill="#00FFD1" fontSize="6" fontFamily="monospace" fontWeight="bold">● LEARNING</text>
        </motion.g>

        <defs>
          <filter id="pulseGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

function UpdateDemo() {
  return (
    <div className="relative h-28 sm:h-32 rounded-xl bg-black/40 border border-[#7B61FF]/10 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 280 120" className="w-full h-full">
        <rect x="0" y="0" width="280" height="120" fill="#060A10" />

        {/* Circular progress ring */}
        <circle cx="80" cy="55" r="32" fill="none" stroke="#1a1a2e" strokeWidth="4" />
        <motion.circle cx="80" cy="55" r="32" fill="none"
          stroke="url(#updateGrad)" strokeWidth="4" strokeLinecap="round"
          strokeDasharray="201"
          animate={{ strokeDashoffset: [201, 0, 0, 201] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.8, 1], ease: "easeInOut" }}
          style={{ transformOrigin: '80px 55px', transform: 'rotate(-90deg)' }}
        />

        {/* Checkmark on completion */}
        <motion.path d="M68 55 L76 63 L92 47"
          fill="none" stroke="#00FFD1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.58, 0.7, 0.85, 1] }}
        />

        {/* Version numbers */}
        <g>
          <text x="170" y="25" fill="#555" fontSize="7" fontFamily="monospace">CURRENT</text>
          <motion.text x="170" y="42" fill="#7B61FF" fontSize="12" fontFamily="monospace" fontWeight="bold"
            animate={{ opacity: [1, 0, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
          >
            v4.2.1
          </motion.text>
          <motion.text x="170" y="42" fill="#00FFD1" fontSize="12" fontFamily="monospace" fontWeight="bold"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.55, 0.65, 0.9, 1] }}
          >
            v4.3.0
          </motion.text>
          <motion.g animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 0.85, 1] }}
          >
            <text x="170" y="56" fill="#00FFD1" fontSize="7" fontFamily="monospace">NEW VERSION</text>
          </motion.g>
        </g>

        {/* Changelog */}
        <g>
          <text x="155" y="75" fill="#444" fontSize="5.5" fontFamily="monospace">CHANGELOG:</text>
          <motion.text x="155" y="85" fill="#00B4D8" fontSize="5" fontFamily="monospace"
            animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
          >
            + Anti-detect update
          </motion.text>
          <motion.text x="155" y="93" fill="#00B4D8" fontSize="5" fontFamily="monospace"
            animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3.5 }}
          >
            + New bypass method
          </motion.text>
          <motion.text x="155" y="101" fill="#00B4D8" fontSize="5" fontFamily="monospace"
            animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 3.5 }}
          >
            + Performance boost
          </motion.text>
          <motion.text x="155" y="109" fill="#00FFD1" fontSize="5" fontFamily="monospace" fontWeight="bold"
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.7, 1] }}
          >
            All patches applied
          </motion.text>
        </g>

        <defs>
          <linearGradient id="updateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#00FFD1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function SupportDemo() {
  return (
    <div className="relative h-28 sm:h-32 rounded-xl bg-black/40 border border-[#00B4D8]/10 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 280 120" className="w-full h-full">
        <rect x="0" y="0" width="280" height="120" fill="#060A10" />

        {/* Chat header */}
        <rect x="30" y="5" width="220" height="16" rx="4" fill="#0A1628" />
        <circle cx="42" cy="13" r="3" fill="#00FFD1" />
        <text x="52" y="16" fill="#00FFD1" fontSize="7" fontFamily="monospace" fontWeight="bold">PHANTOM SUPPORT</text>
        <text x="220" y="16" fill="#00FFD1" fontSize="6" fontFamily="monospace">ONLINE</text>

        {/* User message */}
        <motion.g
          animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 0.6, 0.8, 0.9, 1] }}
        >
          <rect x="120" y="28" width="120" height="18" rx="8" fill="#1a1a3e" stroke="#7B61FF" strokeWidth="0.5" />
          <text x="180" y="40" textAnchor="middle" fill="#aaa" fontSize="6.5" fontFamily="monospace">Need help with setup</text>
        </motion.g>

        {/* Typing indicator */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.15, 0.25, 0.3, 0.5, 0.8, 1] }}
        >
          <rect x="40" y="52" width="50" height="14" rx="7" fill="#0A1628" stroke="#00B4D8" strokeWidth="0.5" />
          <motion.circle cx="53" cy="59" r="2" fill="#00B4D8"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.circle cx="63" cy="59" r="2" fill="#00B4D8"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle cx="73" cy="59" r="2" fill="#00B4D8"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </motion.g>

        {/* Support response */}
        <motion.g
          animate={{ opacity: [0, 0, 0, 1, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.28, 0.35, 0.5, 0.8, 0.9, 1] }}
        >
          <rect x="40" y="52" width="155" height="18" rx="8" fill="#0A2828" stroke="#00FFD1" strokeWidth="0.5" />
          <text x="45" y="64" fill="#00FFD1" fontSize="6.5" fontFamily="monospace">Sure! Let me guide you step by step</text>
        </motion.g>

        {/* Second support message */}
        <motion.g
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.28, 0.42, 0.5, 0.8, 0.9, 1] }}
        >
          <rect x="40" y="76" width="130" height="18" rx="8" fill="#0A2828" stroke="#00FFD1" strokeWidth="0.5" />
          <text x="45" y="88" fill="#00FFD1" fontSize="6.5" fontFamily="monospace">Config sent to your email</text>
        </motion.g>

        {/* Resolution badge */}
        <motion.g
          animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.28, 0.42, 0.58, 0.65, 0.9, 1] }}
        >
          <rect x="80" y="98" width="120" height="14" rx="7" fill="#00FFD1" opacity="0.15" />
          <text x="140" y="108" textAnchor="middle" fill="#00FFD1" fontSize="6.5" fontFamily="monospace" fontWeight="bold">RESOLVED IN 2 MIN</text>
        </motion.g>
      </svg>
    </div>
  )
}

// Map feature IDs to demo components
const demos: Record<number, React.ReactNode> = {
  1: <AimbotDemo />,
  2: <WallhackDemo />,
  3: <ESPDemo />,
  4: <AIDemo />,
  5: <UpdateDemo />,
  6: <SupportDemo />
}

// ═══════════════════════════════════════════
// FEATURE DATA
// ═══════════════════════════════════════════

const features = [
  {
    id: 1,
    title: "Aimbot Predictivo",
    subtitle: "Precisión del 99.7%",
    description: "Algoritmo avanzado que analiza 1,200 movimientos por segundo con predicción de trayectoria en tiempo real.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
    gradient: "from-[#00FFD1] to-[#00B4D8]",
    glowColor: "rgba(0,255,209,0.15)",
    stat: "99.7%",
    statLabel: "Precisión"
  },
  {
    id: 2,
    title: "Wallhack Inteligente",
    subtitle: "Visión sin límites",
    description: "Detección avanzada de posiciones a través de superficies con filtrado inteligente y mínimo impacto visual.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v-2M12 21v-2M5 12H3M21 12h-2" strokeDasharray="2 2" />
      </svg>
    ),
    gradient: "from-[#7B61FF] to-[#00B4D8]",
    glowColor: "rgba(123,97,255,0.15)",
    stat: "360°",
    statLabel: "Cobertura"
  },
  {
    id: 3,
    title: "ESP Avanzado",
    subtitle: "Intel en tiempo real",
    description: "Overlay completo con vida, armadura, armas, distancia y predicción de movimiento de todos los jugadores.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
        <path d="M5 7h3M16 7h3" strokeDasharray="1 1" />
      </svg>
    ),
    gradient: "from-[#00B4D8] to-[#00FFD1]",
    glowColor: "rgba(0,180,216,0.15)",
    stat: "12+",
    statLabel: "Data Points"
  },
  {
    id: 4,
    title: "IA Adaptativa",
    subtitle: "Comportamiento natural",
    description: "Motor de IA que aprende tu estilo de juego y adapta las asistencias para un rendimiento orgánico e indetectable.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M6 10v1a6 6 0 0012 0v-1" />
        <path d="M12 17v4M8 21h8" />
        <circle cx="10" cy="7" r="0.5" fill="currentColor" />
        <circle cx="14" cy="7" r="0.5" fill="currentColor" />
      </svg>
    ),
    gradient: "from-[#00FFD1] to-[#7B61FF]",
    glowColor: "rgba(0,255,209,0.12)",
    stat: "ML",
    statLabel: "Powered"
  },
  {
    id: 5,
    title: "Auto-Update Engine",
    subtitle: "Siempre actualizado",
    description: "Sistema de actualización silenciosa que se sincroniza automáticamente con cada parche sin interrupciones.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c-1.66 0-3-4.03-3-9s1.34-9 3-9m0 18c1.66 0 3-4.03 3-9s-1.34-9-3-9" />
        <path d="M3 12a9 9 0 019-9" />
      </svg>
    ),
    gradient: "from-[#7B61FF] to-[#00FFD1]",
    glowColor: "rgba(123,97,255,0.12)",
    stat: "0s",
    statLabel: "Downtime"
  },
  {
    id: 6,
    title: "Soporte Premium",
    subtitle: "Respuesta inmediata",
    description: "Equipo de expertos disponible 24/7. Setup guiado, configuración personalizada y resolución en minutos.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#00B4D8] to-[#7B61FF]",
    glowColor: "rgba(0,180,216,0.12)",
    stat: "24/7",
    statLabel: "Disponible"
  }
]

const stats = [
  { value: "99.9%", label: "Precisión Aimbot", gradient: "from-accent to-highlight" },
  { value: "0", label: "Bans Reportados", gradient: "from-success to-accent" },
  { value: "10K+", label: "Usuarios Activos", gradient: "from-highlight to-light" },
  { value: "24/7", label: "Soporte Técnico", gradient: "from-accent to-electric" }
]

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

export default function BentoGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Características del producto">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-electric/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" aria-hidden="true" />
            <span className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase">Tecnología Phantom</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4 sm:mb-6 leading-[0.95]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-light/80">
              CARACTERÍSTICAS
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-electric">
              ÉLITE
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/50 max-w-2xl mx-auto font-body leading-relaxed">
            Herramientas de última generación diseñadas para darte la ventaja competitiva definitiva
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <motion.div
                className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,26,43,0.8) 0%, rgba(5,10,14,0.9) 100%)',
                  border: '1px solid rgba(0,255,209,0.1)',
                }}
                whileHover={{
                  borderColor: 'rgba(0,255,209,0.35)',
                  boxShadow: `0 20px 50px ${feature.glowColor}, 0 0 30px ${feature.glowColor}`,
                  y: -4,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Top accent gradient line */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />

                <div className="p-5 sm:p-6 lg:p-7">
                  {/* Icon + Stat row */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] flex-shrink-0`}
                    >
                      <div className="w-full h-full rounded-xl bg-primary/80 flex items-center justify-center text-accent">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Stat badge */}
                    <div className="text-right">
                      <div className={`text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                        {feature.stat}
                      </div>
                      <div className="text-[10px] sm:text-xs text-light/40 font-mono uppercase tracking-wider">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title + Subtitle */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-light mb-1 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent/70 font-mono mb-3 sm:mb-4">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-light/50 leading-relaxed group-hover:text-light/65 transition-colors duration-300 mb-4">
                    {feature.description}
                  </p>

                  {/* Animated Demo */}
                  {demos[feature.id]}

                  {/* Bottom hover indicator */}
                  <div className="mt-4 sm:mt-5 flex items-center gap-2 text-accent/0 group-hover:text-accent/70 transition-all duration-300">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 group-hover:via-accent/40 transition-all duration-300" aria-hidden="true" />
                    <span className="text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,26,43,0.6) 0%, rgba(5,10,14,0.8) 100%)',
                  border: '1px solid rgba(0,255,209,0.08)',
                }}
              >
                <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-1 sm:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-light/45 text-xs sm:text-sm font-mono tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
