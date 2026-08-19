import React from 'react';

interface SirinLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white' | 'purple';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  layout?: 'horizontal' | 'stacked';
}

export const SirinLogo: React.FC<SirinLogoProps> = ({
  className = '',
  variant = 'purple',
  showTagline = true,
  size = 'md',
  iconOnly = false,
  layout = 'horizontal',
}) => {
  const sizeMap = {
    sm: {
      icon: 32,
      titleSize: 'text-lg',
      subSize: 'text-[9px]',
      taglineSize: 'text-[8px]',
      gap: 'gap-2.5',
      lineWidth: 'w-4',
    },
    md: {
      icon: 44,
      titleSize: 'text-2xl',
      subSize: 'text-[11px]',
      taglineSize: 'text-[9px]',
      gap: 'gap-3',
      lineWidth: 'w-6 sm:w-8',
    },
    lg: {
      icon: 60,
      titleSize: 'text-3xl sm:text-4xl',
      subSize: 'text-xs sm:text-sm',
      taglineSize: 'text-[10px] sm:text-xs',
      gap: 'gap-4',
      lineWidth: 'w-8 sm:w-12',
    },
    xl: {
      icon: 84,
      titleSize: 'text-4xl sm:text-5xl',
      subSize: 'text-sm sm:text-base',
      taglineSize: 'text-xs sm:text-sm',
      gap: 'gap-5',
      lineWidth: 'w-12 sm:w-16',
    },
  };

  const currentSize = sizeMap[size];

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          textSirin: 'text-white',
          textVisuals: 'text-purple-200',
          textTagline: 'text-purple-200/90',
          lineColor: 'bg-purple-300/80',
          gradId: 'sirin-white',
          sTop: '#FFFFFF',
          sMid: '#E9D5FF',
          sBottom: '#C084FC',
          orbitStroke: '#DDD6FE',
          sparkleFill: '#FFFFFF',
        };
      case 'light':
        return {
          textSirin: 'text-white',
          textVisuals: 'text-purple-200',
          textTagline: 'text-purple-300',
          lineColor: 'bg-purple-400',
          gradId: 'sirin-light',
          sTop: '#E9D5FF',
          sMid: '#A855F7',
          sBottom: '#7C3AED',
          orbitStroke: '#C084FC',
          sparkleFill: '#DDD6FE',
        };
      case 'dark':
        return {
          textSirin: 'text-[#1B0533]',
          textVisuals: 'text-[#2E0B54]',
          textTagline: 'text-[#581C87]',
          lineColor: 'bg-[#581C87]',
          gradId: 'sirin-dark',
          sTop: '#2E0854',
          sMid: '#581C87',
          sBottom: '#7C3AED',
          orbitStroke: '#7C3AED',
          sparkleFill: '#581C87',
        };
      case 'purple':
      default:
        return {
          textSirin: 'text-transparent bg-clip-text bg-gradient-to-r from-[#200540] via-[#4C1D95] to-[#7C3AED]',
          textVisuals: 'text-[#1D0636]',
          textTagline: 'text-[#3B0764]',
          lineColor: 'bg-[#581C87]',
          gradId: 'sirin-purple',
          sTop: '#1E0538',
          sMid: '#4C1D95',
          sBottom: '#7C3AED',
          orbitStroke: '#7C3AED',
          sparkleFill: '#6D28D9',
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`inline-flex ${
        layout === 'stacked' ? 'flex-col items-center text-center' : 'items-center'
      } ${currentSize.gap} select-none ${className}`}
    >
      {/* Official Geometric "S" Emblem with Orbital Ring & Sparkles */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          <defs>
            {/* Gradient for Top S Segment */}
            <linearGradient id={`s-top-grad-${colors.gradId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.sTop} />
              <stop offset="60%" stopColor={colors.sMid} />
              <stop offset="100%" stopColor={colors.sBottom} />
            </linearGradient>

            {/* Gradient for Bottom S Segment */}
            <linearGradient id={`s-bot-grad-${colors.gradId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.sMid} />
              <stop offset="50%" stopColor={colors.sBottom} />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>

            {/* Subtle Drop Shadow */}
            <filter id={`s-shadow-${colors.gradId}`} x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3B0764" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Thin Circular Orbit Ring */}
          <circle
            cx="60"
            cy="60"
            r="46"
            stroke={colors.orbitStroke}
            strokeWidth="1.75"
            strokeDasharray="none"
            opacity="0.85"
          />

          {/* Sparkle Star 1 (Top-Right on Orbit Ring) */}
          <g transform="translate(93, 27) scale(0.9)">
            <path
              d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10 Z"
              fill={colors.sparkleFill}
            />
          </g>

          {/* Sparkle Star 2 (Subtle Small on Left) */}
          <g transform="translate(18, 52) scale(0.45)">
            <path
              d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10 Z"
              fill={colors.sparkleFill}
              opacity="0.75"
            />
          </g>

          {/* Official Stylized Geometric "S" Monogram */}
          <g filter={`url(#s-shadow-${colors.gradId})`}>
            {/* Top Ribbon of S */}
            <path
              d="M32 46 L54 24 L94 24 L76 46 L56 46 L44 58 L32 46 Z"
              fill={`url(#s-top-grad-${colors.gradId})`}
            />

            {/* Bottom Ribbon of S (Interlocking Fold) */}
            <path
              d="M88 74 L66 96 L26 96 L44 74 L64 74 L76 62 L88 74 Z"
              fill={`url(#s-bot-grad-${colors.gradId})`}
            />

            {/* Inner Connecting Bridge / Isometric Notch */}
            <path
              d="M44 58 L56 46 L76 62 L64 74 Z"
              fill={colors.sBottom}
              opacity="0.95"
            />
          </g>
        </svg>
      </div>

      {/* Official Typography: SIRIN / VISUALS / Tagline */}
      {!iconOnly && (
        <div className={`flex flex-col ${layout === 'stacked' ? 'items-center' : 'items-start'} justify-center`}>
          {/* SIRIN */}
          <div
            className={`font-display font-extrabold tracking-[0.2em] leading-none uppercase ${currentSize.titleSize} ${colors.textSirin}`}
          >
            SIRIN
          </div>

          {/* — VISUALS — */}
          <div className="flex items-center gap-1.5 sm:gap-2 my-0.5 sm:my-1 w-full justify-between">
            <span className={`h-[1.5px] ${currentSize.lineWidth} ${colors.lineColor} rounded-full opacity-80`} />
            <span
              className={`font-display font-bold uppercase tracking-[0.38em] leading-none ${currentSize.subSize} ${colors.textVisuals}`}
            >
              VISUALS
            </span>
            <span className={`h-[1.5px] ${currentSize.lineWidth} ${colors.lineColor} rounded-full opacity-80`} />
          </div>

          {/* CAPTURE | CREATE | ELEVATE */}
          {showTagline && (
            <div
              className={`font-tech font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] leading-tight ${currentSize.taglineSize} ${colors.textTagline} pt-0.5`}
            >
              CAPTURE <span className="text-purple-400 mx-0.5 sm:mx-1">|</span> CREATE{' '}
              <span className="text-purple-400 mx-0.5 sm:mx-1">|</span> ELEVATE
            </div>
          )}
        </div>
      )}
    </div>
  );
};
