'use client'

import { motion } from 'framer-motion'
import { translations, t, type Lang } from '../translations'

// ═══════════════════════════════════════════
// ANIMATED DEMOS - HD VFX for each feature
// ═══════════════════════════════════════════

const DEMO_CLASS = "relative h-40 sm:h-48 lg:h-52 rounded-xl bg-black/50 border border-white/[0.06] overflow-hidden backdrop-blur-sm"

function AimbotDemo() {
  return (
    <div className={DEMO_CLASS} aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'linear-gradient(rgba(255,70,85,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,70,85,0.4) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full" shapeRendering="geometricPrecision" textRendering="optimizeLegibility">
        {/* Radial ambient glow */}
        <radialGradient id="ambientAim" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4655" stopOpacity="0.06" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <rect x="0" y="0" width="400" height="180" fill="url(#ambientAim)" />

        {/* Moving target */}
        <motion.circle
          cx="200" cy="90" r="8"
          fill="#FFD700"
          filter="url(#hdTargetGlow)"
          animate={{ cx: [100, 300, 200, 70, 330, 200], cy: [50, 130, 40, 110, 70, 90] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200" cy="90" r="16"
          fill="none" stroke="#FFD700" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5"
          animate={{ cx: [100, 300, 200, 70, 330, 200], cy: [50, 130, 40, 110, 70, 90], r: [16, 19, 16] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Prediction line */}
        <motion.line
          stroke="#FF4655" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.35"
          animate={{
            x1: [100, 300, 200, 70, 330, 200], y1: [50, 130, 40, 110, 70, 90],
            x2: [300, 200, 70, 330, 200, 100], y2: [130, 40, 110, 70, 90, 50]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Crosshair group */}
        <motion.g
          animate={{
            x: [100 - 200, 300 - 200, 0, 70 - 200, 330 - 200, 0],
            y: [50 - 90, 130 - 90, 40 - 90, 110 - 90, 70 - 90, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
        >
          <line x1="200" y1="62" x2="200" y2="80" stroke="#FF4655" strokeWidth="2" />
          <line x1="200" y1="100" x2="200" y2="118" stroke="#FF4655" strokeWidth="2" />
          <line x1="172" y1="90" x2="190" y2="90" stroke="#FF4655" strokeWidth="2" />
          <line x1="210" y1="90" x2="228" y2="90" stroke="#FF4655" strokeWidth="2" />
          <motion.circle cx="200" cy="90" r="22" fill="none" stroke="#FF4655" strokeWidth="1.2"
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 0.96, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle cx="200" cy="90" r="3" fill="#FF4655"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          {/* Corner brackets */}
          <path d="M176 68 L176 62 L182 62" fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.5" />
          <path d="M224 62 L224 68" fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.5" />
          <path d="M218 62 L224 62" fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.5" />
          <path d="M176 112 L176 118 L182 118" fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.5" />
          <path d="M224 118 L224 112" fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.5" />
          <path d="M218 118 L224 118" fill="none" stroke="#FF4655" strokeWidth="1" opacity="0.5" />
        </motion.g>

        {/* Distance readout */}
        <motion.g animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <text x="30" y="28" fill="#FFD700" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="500">DIST: 24.3m</text>
        </motion.g>

        {/* FOV indicator */}
        <text x="30" y="44" fill="#555" fontSize="9" fontFamily="'JetBrains Mono', monospace">FOV: 120°</text>

        {/* TARGET LOCKED */}
        <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.08, 0.75, 1] }}>
          <rect x="130" y="148" width="140" height="22" rx="4" fill="#FF4655" opacity="0.08" />
          <text x="200" y="163" textAnchor="middle" fill="#FF4655" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="700" letterSpacing="1">
            ● TARGET LOCKED
          </text>
        </motion.g>

        <defs>
          <filter id="hdTargetGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

function WallhackDemo() {
  return (
    <div className={DEMO_CLASS} aria-hidden="true">
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full" shapeRendering="geometricPrecision" textRendering="optimizeLegibility">
        <rect x="0" y="0" width="400" height="180" fill="#080C12" />

        {/* Left zone */}
        <rect x="10" y="12" width="120" height="156" rx="6" fill="#0A1628" stroke="#C850C0" strokeWidth="0.6" opacity="0.4" />
        <text x="70" y="30" textAnchor="middle" fill="#C850C0" fontSize="9" fontFamily="'JetBrains Mono', monospace" opacity="0.7">YOUR VIEW</text>

        {/* Player icon on left */}
        <circle cx="70" cy="85" r="7" fill="none" stroke="#FF4655" strokeWidth="1.2" />
        <line x1="70" y1="92" x2="70" y2="115" stroke="#FF4655" strokeWidth="1.2" />
        <line x1="60" y1="100" x2="80" y2="100" stroke="#FF4655" strokeWidth="1" />
        <text x="70" y="132" textAnchor="middle" fill="#FF4655" fontSize="8" fontFamily="'JetBrains Mono', monospace">YOU</text>

        {/* Wall */}
        <rect x="148" y="6" width="80" height="168" fill="#161B2E" stroke="#2a2a44" strokeWidth="1.2" />
        {/* Brick texture */}
        <line x1="152" y1="40" x2="224" y2="40" stroke="#1e2238" strokeWidth="0.8" />
        <line x1="152" y1="70" x2="224" y2="70" stroke="#1e2238" strokeWidth="0.8" />
        <line x1="152" y1="100" x2="224" y2="100" stroke="#1e2238" strokeWidth="0.8" />
        <line x1="152" y1="130" x2="224" y2="130" stroke="#1e2238" strokeWidth="0.8" />
        <line x1="188" y1="6" x2="188" y2="174" stroke="#1e2238" strokeWidth="0.8" />
        <text x="188" y="92" textAnchor="middle" fill="#3a3a55" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600">WALL</text>

        {/* Right zone */}
        <rect x="246" y="12" width="144" height="156" rx="6" fill="#0A1628" stroke="#C850C0" strokeWidth="0.6" opacity="0.4" />

        {/* Enemy behind wall */}
        <motion.g animate={{ y: [0, -8, 0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          {/* Enemy skeleton */}
          <motion.circle cx="318" cy="55" r="9" fill="none" stroke="#FFD700" strokeWidth="2"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.ellipse cx="318" cy="80" rx="11" ry="18" fill="none" stroke="#FFD700" strokeWidth="2"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line x1="307" y1="72" x2="298" y2="85" stroke="#FFD700" strokeWidth="1.5"
            animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line x1="329" y1="72" x2="338" y2="85" stroke="#FFD700" strokeWidth="1.5"
            animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
          />
          {/* HP bar */}
          <rect x="298" y="105" width="40" height="5" rx="2" fill="#222" />
          <motion.rect x="298" y="105" width="40" height="5" rx="2" fill="#FFD700"
            animate={{ width: [40, 25, 40] }} transition={{ duration: 5, repeat: Infinity }}
          />
          <text x="318" y="122" textAnchor="middle" fill="#FF6666" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">ENEMY</text>
          <motion.text x="318" y="136" textAnchor="middle" fill="#FFD700" fontSize="8" fontFamily="'JetBrains Mono', monospace"
            animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}
          >
            32.1m
          </motion.text>
        </motion.g>

        {/* X-ray vision lines */}
        <motion.line x1="70" y1="85" x2="318" y2="70"
          stroke="#C850C0" strokeWidth="1" strokeDasharray="6 6"
          animate={{ opacity: [0, 0.7, 0] }} transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line x1="70" y1="90" x2="318" y2="80"
          stroke="#FF4655" strokeWidth="0.6" strokeDasharray="3 8"
          animate={{ opacity: [0, 0.5, 0], strokeDashoffset: [0, -30] }} transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Scan line */}
        <motion.rect x="0" y="0" width="400" height="3"
          fill="url(#hdScanGrad)"
          animate={{ y: [0, 180] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Wall highlight */}
        <motion.rect x="148" y="6" width="80" height="168"
          fill="none" stroke="#C850C0" strokeWidth="1.5"
          animate={{ opacity: [0.08, 0.45, 0.08] }} transition={{ duration: 2, repeat: Infinity }}
        />

        {/* DETECTED badge */}
        <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}>
          <rect x="268" y="148" width="100" height="20" rx="4" fill="#FFD700" opacity="0.15" />
          <text x="318" y="162" textAnchor="middle" fill="#FF6666" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="700">⚠ DETECTED</text>
        </motion.g>

        <defs>
          <linearGradient id="hdScanGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(200,80,192,0.7)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ESPDemo() {
  return (
    <div className={DEMO_CLASS} aria-hidden="true">
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full" shapeRendering="geometricPrecision" textRendering="optimizeLegibility">
        <rect x="0" y="0" width="400" height="180" fill="#060A10" />

        {/* HUD corners */}
        <path d="M8 22 L8 8 L22 8" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />
        <path d="M378 8 L392 8 L392 22" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />
        <path d="M8 158 L8 172 L22 172" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />
        <path d="M378 172 L392 172 L392 158" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />

        {/* Player 1 - Friendly */}
        <g>
          <motion.rect x="40" y="28" width="44" height="75" rx="3"
            fill="none" stroke="#FF4655" strokeWidth="1.5"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="62" cy="40" r="7" fill="none" stroke="#FF4655" strokeWidth="1" />
          <line x1="62" y1="47" x2="62" y2="76" stroke="#FF4655" strokeWidth="1" />
          <line x1="50" y1="58" x2="74" y2="58" stroke="#FF4655" strokeWidth="0.8" />
          <text x="62" y="22" textAnchor="middle" fill="#FF4655" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600">JETT</text>
          {/* HP bar */}
          <rect x="40" y="110" width="44" height="5" rx="2" fill="#1a1a1a" />
          <motion.rect x="40" y="110" width="44" height="5" rx="2" fill="#FF4655"
            animate={{ width: [44, 33, 44] }} transition={{ duration: 6, repeat: Infinity }}
          />
          <text x="62" y="128" textAnchor="middle" fill="#FF4655" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500">150 HP</text>
          <text x="62" y="142" textAnchor="middle" fill="#666" fontSize="8" fontFamily="'JetBrains Mono', monospace">PHANTOM</text>
          <motion.text x="62" y="156" textAnchor="middle" fill="#FFD700" fontSize="8" fontFamily="'JetBrains Mono', monospace"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
          >12.4m</motion.text>
        </g>

        {/* Player 2 - Enemy */}
        <g>
          <motion.rect x="200" y="20" width="40" height="68" rx="3"
            fill="none" stroke="#FFD700" strokeWidth="1.5"
            animate={{ opacity: [0.5, 1, 0.5], x: [200, 208, 200] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.circle cx="220" cy="32" r="7" fill="none" stroke="#FFD700" strokeWidth="1"
            animate={{ cx: [220, 228, 220] }} transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.line x1="220" y1="39" x2="220" y2="64" stroke="#FFD700" strokeWidth="1"
            animate={{ x1: [220, 228, 220], x2: [220, 228, 220] }} transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.text x="220" y="14" textAnchor="middle" fill="#FFD700" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600"
            animate={{ x: [220, 228, 220] }} transition={{ duration: 3.5, repeat: Infinity }}
          >REYNA</motion.text>
          {/* HP */}
          <rect x="200" y="98" width="40" height="5" rx="2" fill="#1a1a1a" />
          <motion.rect x="200" y="98" width="26" height="5" rx="2" fill="#FFD700"
            animate={{ width: [26, 14, 26] }} transition={{ duration: 4, repeat: Infinity }}
          />
          <text x="220" y="116" textAnchor="middle" fill="#FFD700" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500">75 HP</text>
          <text x="220" y="130" textAnchor="middle" fill="#666" fontSize="8" fontFamily="'JetBrains Mono', monospace">VANDAL</text>
          <motion.text x="220" y="144" textAnchor="middle" fill="#FF6666" fontSize="8" fontFamily="'JetBrains Mono', monospace"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }}
          >28.7m</motion.text>
        </g>

        {/* Mini Radar */}
        <g>
          <circle cx="340" cy="40" r="28" fill="#0A1628" stroke="#FFD700" strokeWidth="0.8" opacity="0.9" />
          <circle cx="340" cy="40" r="14" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.2" />
          <line x1="340" y1="12" x2="340" y2="68" stroke="#FFD700" strokeWidth="0.4" opacity="0.2" />
          <line x1="312" y1="40" x2="368" y2="40" stroke="#FFD700" strokeWidth="0.4" opacity="0.2" />
          <motion.line x1="340" y1="40" x2="368" y2="40"
            stroke="#FFD700" strokeWidth="1.5"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '340px 40px' }}
          />
          <motion.circle cx="332" cy="30" r="3" fill="#FF4655"
            animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle cx="354" cy="48" r="3" fill="#FFD700"
            animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <text x="340" y="76" textAnchor="middle" fill="#FFD700" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="500">RADAR</text>
        </g>

        {/* Status bar */}
        <motion.text x="200" y="172" textAnchor="middle" fill="#FFD700" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500"
          animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
        >
          ESP ACTIVE  ●  6 PLAYERS DETECTED  ●  ROUND 14
        </motion.text>
      </svg>
    </div>
  )
}

function AIDemo() {
  const inputY = [30, 60, 90, 120]
  const hiddenY = [20, 48, 76, 104, 132]
  const outputY = [40, 80, 120]

  return (
    <div className={DEMO_CLASS} aria-hidden="true">
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full" shapeRendering="geometricPrecision" textRendering="optimizeLegibility">
        <rect x="0" y="0" width="400" height="180" fill="#060A10" />

        {/* Connections: Input → Hidden */}
        {inputY.map((iy, i) =>
          hiddenY.map((hy, j) => (
            <motion.line key={`ih-${i}-${j}`}
              x1="78" y1={iy} x2="192" y2={hy}
              stroke="#FF4655" strokeWidth="0.6"
              animate={{ opacity: [0.03, 0.3, 0.03] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: (i + j) * 0.1 }}
            />
          ))
        )}

        {/* Connections: Hidden → Output */}
        {hiddenY.map((hy, i) =>
          outputY.map((oy, j) => (
            <motion.line key={`ho-${i}-${j}`}
              x1="208" y1={hy} x2="322" y2={oy}
              stroke="#C850C0" strokeWidth="0.6"
              animate={{ opacity: [0.03, 0.3, 0.03] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: (i + j) * 0.12 + 0.5 }}
            />
          ))
        )}

        {/* Input layer */}
        {inputY.map((y, i) => (
          <g key={`in-${i}`}>
            <motion.circle cx="70" cy={y} r="8" fill="#0A1628" stroke="#FF4655" strokeWidth="1.5"
              animate={{ strokeOpacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
            <motion.circle cx="70" cy={y} r="3" fill="#FF4655"
              animate={{ opacity: [0.2, 0.9, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}

        {/* Hidden layer */}
        {hiddenY.map((y, i) => (
          <g key={`hid-${i}`}>
            <motion.circle cx="200" cy={y} r="8" fill="#0A1628" stroke="#C850C0" strokeWidth="1.5"
              animate={{ strokeOpacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 + 0.5 }}
            />
            <motion.circle cx="200" cy={y} r="3" fill="#C850C0"
              animate={{ opacity: [0.2, 0.9, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 + 0.5 }}
            />
          </g>
        ))}

        {/* Output layer */}
        {outputY.map((y, i) => (
          <g key={`out-${i}`}>
            <motion.circle cx="330" cy={y} r="8" fill="#0A1628" stroke="#FFD700" strokeWidth="1.5"
              animate={{ strokeOpacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 + 1 }}
            />
            <motion.circle cx="330" cy={y} r="3" fill="#FFD700"
              animate={{ opacity: [0.2, 0.9, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 + 1 }}
            />
          </g>
        ))}

        {/* Data pulses */}
        <motion.circle r="3.5" fill="#FF4655" filter="url(#hdPulseGlow)"
          animate={{ cx: [70, 200, 330], cy: [60, 48, 80], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle r="3.5" fill="#C850C0" filter="url(#hdPulseGlow)"
          animate={{ cx: [70, 200, 330], cy: [90, 104, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.circle r="3.5" fill="#FFD700" filter="url(#hdPulseGlow)"
          animate={{ cx: [70, 200, 330], cy: [30, 76, 120], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />

        {/* Labels */}
        <text x="70" y="155" textAnchor="middle" fill="#FF4655" fontSize="9" fontFamily="'JetBrains Mono', monospace" opacity="0.6" fontWeight="500">INPUT</text>
        <text x="200" y="162" textAnchor="middle" fill="#C850C0" fontSize="9" fontFamily="'JetBrains Mono', monospace" opacity="0.6" fontWeight="500">HIDDEN</text>
        <text x="330" y="155" textAnchor="middle" fill="#FFD700" fontSize="9" fontFamily="'JetBrains Mono', monospace" opacity="0.6" fontWeight="500">OUTPUT</text>

        {/* LEARNING indicator */}
        <motion.g animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <rect x="145" y="2" width="110" height="18" rx="9" fill="#FF4655" opacity="0.08" />
          <text x="200" y="14" textAnchor="middle" fill="#FF4655" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">● LEARNING</text>
        </motion.g>

        <defs>
          <filter id="hdPulseGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

function UpdateDemo() {
  return (
    <div className={DEMO_CLASS} aria-hidden="true">
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full" shapeRendering="geometricPrecision" textRendering="optimizeLegibility">
        <rect x="0" y="0" width="400" height="180" fill="#060A10" />

        {/* Circular progress ring */}
        <circle cx="110" cy="85" r="48" fill="none" stroke="#1a1a2e" strokeWidth="5" />
        <motion.circle cx="110" cy="85" r="48" fill="none"
          stroke="url(#hdUpdateGrad)" strokeWidth="5" strokeLinecap="round"
          strokeDasharray="301"
          animate={{ strokeDashoffset: [301, 0, 0, 301] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.8, 1], ease: "easeInOut" }}
          style={{ transformOrigin: '110px 85px', transform: 'rotate(-90deg)' }}
        />
        {/* Outer glow ring */}
        <motion.circle cx="110" cy="85" r="52" fill="none" stroke="#C850C0" strokeWidth="0.5"
          animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Checkmark */}
        <motion.path d="M92 85 L104 97 L130 71"
          fill="none" stroke="#FF4655" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.58, 0.72, 0.85, 1] }}
        />

        {/* Version info */}
        <g>
          <text x="230" y="30" fill="#555" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="500">CURRENT VERSION</text>
          <motion.text x="230" y="52" fill="#C850C0" fontSize="18" fontFamily="'JetBrains Mono', monospace" fontWeight="700"
            animate={{ opacity: [1, 0, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
          >v4.2.1</motion.text>
          <motion.text x="230" y="52" fill="#FF4655" fontSize="18" fontFamily="'JetBrains Mono', monospace" fontWeight="700"
            animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.55, 0.65, 0.9, 1] }}
          >v4.3.0</motion.text>
          <motion.g animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 0.85, 1] }}>
            <text x="230" y="70" fill="#FF4655" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="500">✓ NEW VERSION</text>
          </motion.g>
        </g>

        {/* Changelog */}
        <g>
          <text x="230" y="96" fill="#444" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500">CHANGELOG:</text>
          <motion.text x="230" y="114" fill="#FFD700" fontSize="9" fontFamily="'JetBrains Mono', monospace"
            animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
          >+ Anti-detect update</motion.text>
          <motion.text x="230" y="130" fill="#FFD700" fontSize="9" fontFamily="'JetBrains Mono', monospace"
            animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3.5 }}
          >+ New bypass method</motion.text>
          <motion.text x="230" y="146" fill="#FFD700" fontSize="9" fontFamily="'JetBrains Mono', monospace"
            animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 3.5 }}
          >+ Performance boost</motion.text>
          <motion.text x="230" y="166" fill="#FF4655" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="700"
            animate={{ opacity: [0, 0, 1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.7, 1] }}
          >✓ All patches applied</motion.text>
        </g>

        <defs>
          <linearGradient id="hdUpdateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C850C0" />
            <stop offset="100%" stopColor="#FF4655" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function SupportDemo() {
  return (
    <div className={DEMO_CLASS} aria-hidden="true">
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full" shapeRendering="geometricPrecision" textRendering="optimizeLegibility">
        <rect x="0" y="0" width="400" height="180" fill="#060A10" />

        {/* Chat header */}
        <rect x="30" y="6" width="340" height="24" rx="6" fill="#0A1628" stroke="#FFD700" strokeWidth="0.4" />
        <circle cx="48" cy="18" r="5" fill="#FF4655" />
        <text x="62" y="22" fill="#FF4655" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="700">PHANTOM SUPPORT</text>
        <text x="338" y="22" fill="#FF4655" fontSize="9" fontFamily="'JetBrains Mono', monospace">● ONLINE</text>

        {/* User message */}
        <motion.g
          animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 0.6, 0.8, 0.9, 1] }}
        >
          <rect x="150" y="40" width="200" height="26" rx="12" fill="#1a1a3e" stroke="#C850C0" strokeWidth="0.6" />
          <text x="250" y="57" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'JetBrains Mono', monospace">Need help with setup</text>
        </motion.g>

        {/* Typing indicator */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.15, 0.25, 0.3, 0.5, 0.8, 1] }}
        >
          <rect x="40" y="76" width="70" height="22" rx="11" fill="#0A1628" stroke="#FFD700" strokeWidth="0.6" />
          <motion.circle cx="58" cy="87" r="3" fill="#FFD700"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.circle cx="73" cy="87" r="3" fill="#FFD700"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle cx="88" cy="87" r="3" fill="#FFD700"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </motion.g>

        {/* Support response 1 */}
        <motion.g
          animate={{ opacity: [0, 0, 0, 1, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.28, 0.35, 0.5, 0.8, 0.9, 1] }}
        >
          <rect x="40" y="76" width="260" height="26" rx="12" fill="#082828" stroke="#FF4655" strokeWidth="0.6" />
          <text x="50" y="93" fill="#FF4655" fontSize="10" fontFamily="'JetBrains Mono', monospace">Sure! Let me guide you step by step</text>
        </motion.g>

        {/* Support response 2 */}
        <motion.g
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.28, 0.42, 0.5, 0.8, 0.9, 1] }}
        >
          <rect x="40" y="112" width="220" height="26" rx="12" fill="#082828" stroke="#FF4655" strokeWidth="0.6" />
          <text x="50" y="129" fill="#FF4655" fontSize="10" fontFamily="'JetBrains Mono', monospace">Config sent to your email ✓</text>
        </motion.g>

        {/* Resolution badge */}
        <motion.g
          animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.28, 0.42, 0.58, 0.65, 0.9, 1] }}
        >
          <rect x="100" y="148" width="200" height="24" rx="12" fill="#FF4655" opacity="0.1" />
          <text x="200" y="164" textAnchor="middle" fill="#FF4655" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="700">✓ RESOLVED IN 2 MIN</text>
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

const featureIcons = [
  <svg key="aim" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>,
  <svg key="wall" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 5v-2M12 21v-2M5 12H3M21 12h-2" strokeDasharray="2 2" />
  </svg>,
  <svg key="esp" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <circle cx="8" cy="10" r="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    <path d="M5 7h3M16 7h3" strokeDasharray="1 1" />
  </svg>,
  <svg key="ai" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
    <path d="M6 10v1a6 6 0 0012 0v-1" />
    <path d="M12 17v4M8 21h8" />
    <circle cx="10" cy="7" r="0.5" fill="currentColor" />
    <circle cx="14" cy="7" r="0.5" fill="currentColor" />
  </svg>,
  <svg key="update" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c-1.66 0-3-4.03-3-9s1.34-9 3-9m0 18c1.66 0 3-4.03 3-9s-1.34-9-3-9" />
    <path d="M3 12a9 9 0 019-9" />
  </svg>,
  <svg key="support" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2" strokeLinecap="round" />
  </svg>
]

const featureKeys = ['aimbot', 'wallhack', 'esp', 'ai', 'autoUpdate', 'support'] as const
const featureGradients = [
  "from-[#FF4655] to-[#FFD700]",
  "from-[#C850C0] to-[#FFD700]",
  "from-[#FFD700] to-[#FF4655]",
  "from-[#FF4655] to-[#C850C0]",
  "from-[#C850C0] to-[#FF4655]",
  "from-[#FFD700] to-[#C850C0]"
]
const featureGlowColors = [
  "rgba(255,70,85,0.15)",
  "rgba(200,80,192,0.15)",
  "rgba(0,180,216,0.15)",
  "rgba(255,70,85,0.12)",
  "rgba(200,80,192,0.12)",
  "rgba(0,180,216,0.12)"
]
const featureStats = ["99.7%", "360°", "12+", "ML", "0s", "24/7"]

const statValues = ["99.9%", "0", "10K+", "24/7"]
const statGradients = ["from-accent to-highlight", "from-success to-accent", "from-highlight to-light", "from-accent to-electric"]
const statKeys = ['aimbotAccuracy', 'bansReported', 'activeUsers', 'techSupport'] as const

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

interface BentoGridProps {
  lang?: Lang
}

export default function BentoGrid({ lang = 'es' }: BentoGridProps) {
  const bentoT = translations.bento
  const features = featureKeys.map((key, i) => {
    const feat = bentoT.features[key]
    return {
      id: i + 1,
      title: t(feat.title, lang),
      subtitle: t(feat.subtitle, lang),
      description: t(feat.description, lang),
      icon: featureIcons[i],
      gradient: featureGradients[i],
      glowColor: featureGlowColors[i],
      stat: featureStats[i],
      statLabel: 'statLabel' in feat ? t((feat as { statLabel: Record<string, string> }).statLabel, lang) : (key === 'esp' ? 'Data Points' : key === 'ai' ? 'Powered' : key === 'autoUpdate' ? 'Downtime' : ''),
    }
  })

  const stats = statKeys.map((key, i) => ({
    value: statValues[i],
    label: t(bentoT.stats[key], lang),
    gradient: statGradients[i],
  }))
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Características del producto">
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
            <span className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase">{t(bentoT.phantomTech, lang)}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4 sm:mb-6 leading-[0.95]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-light/80">
              {t(bentoT.characteristics, lang)}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-electric">
              {t(bentoT.elite, lang)}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/50 max-w-2xl mx-auto font-body leading-relaxed">
            {t(bentoT.subtitle, lang)}
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
                  border: '1px solid rgba(255,70,85,0.1)',
                }}
                whileHover={{
                  borderColor: 'rgba(255,70,85,0.35)',
                  boxShadow: `0 20px 50px ${feature.glowColor}, 0 0 30px ${feature.glowColor}`,
                  y: -4,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className={`h-[2px] w-full bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] flex-shrink-0`}>
                      <div className="w-full h-full rounded-xl bg-primary/80 flex items-center justify-center text-accent">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                        {feature.stat}
                      </div>
                      <div className="text-[10px] sm:text-xs text-light/40 font-mono uppercase tracking-wider">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-light mb-1 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent/70 font-mono mb-3 sm:mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="text-sm text-light/50 leading-relaxed group-hover:text-light/65 transition-colors duration-300 mb-4">
                    {feature.description}
                  </p>

                  {demos[feature.id]}

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
                  border: '1px solid rgba(255,70,85,0.08)',
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
