import React from 'react'
export default function KronosSVG({ accent='#6ef0ff', accent2='#f5d36c' }){
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="halo" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopOpacity="0.7" stopColor={accent2} />
          <stop offset="60%" stopOpacity="0.15" stopColor={accent} />
          <stop offset="100%" stopOpacity="0" stopColor="#000" />
        </radialGradient>
        <linearGradient id="edge" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accent2} />
        </linearGradient>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer><feFuncA type="table" tableValues="0 0.06" /></feComponentTransfer>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#halo)" />
      <g transform="translate(800 520)">
        <g fill="none" stroke="url(#edge)" strokeWidth="2">
          <path d="M -80 -220 C -150 -180 -160 -60 -130 40 C -80 200 80 200 120 40 C 150 -70 110 -160 40 -210 C 10 -235 -40 -235 -80 -220 Z" />
          <path d="M -20 -220 L 10 -320 L 40 -220" />
          <path d="M -100 -100 L -180 -50 L -110 10" />
          <path d="M 120 -100 L 200 -40 L 140 20" />
          <circle cx="0" cy="-140" r="14" />
        </g>
        <g stroke={accent2} strokeWidth="3" fill="none" opacity="0.9">
          <path d="M -250 -260 Q -40 -200 -10 40" />
          <path d="M -270 -280 Q -60 -210 -30 20" />
          <path d="M -270 -280 Q -190 -300 -120 -290" />
        </g>
      </g>
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.4" />
    </svg>
  )
}