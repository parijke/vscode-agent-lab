import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded-sm transition-all duration-200 select-none min-h-[80px] text-xs leading-tight font-body overflow-hidden';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-bingo to-marked border-coffee-beans shadow-md text-coffee-beans font-semibold'
      : 'bg-gradient-to-br from-marked to-cream-foam border-wood-grain text-coffee-beans shadow-sm'
    : 'bg-warm-white border-wood-grain/50 text-coffee-beans active:bg-cream-foam active:shadow-md';

  const freeSpaceClasses = square.isFreeSpace ? 'font-display font-bold text-sm bg-gradient-to-br from-wood-grain/20 to-transparent border-dashed' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {/* Napkin texture/aged paper effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(92, 64, 51, 0.1) 2px, rgba(92, 64, 51, 0.1) 4px)`
      }} />

      {/* Coffee stain edge effect for marked squares */}
      {square.isMarked && !square.isFreeSpace && (
        <>
          <div className="absolute top-0 right-0 w-8 h-8 opacity-20 pointer-events-none" style={{
            background: `radial-gradient(circle, #3E2723 0%, transparent 70%)`
          }} />
          <div className="absolute bottom-1 left-1 w-6 h-6 opacity-15 pointer-events-none" style={{
            background: `radial-gradient(circle, #8B6F47 0%, transparent 70%)`
          }} />
        </>
      )}

      {/* Text content */}
      <span className="relative z-10 wrap-break-word hyphens-auto">{square.text}</span>

      {/* Coffee stain marker instead of checkmark */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-sm z-20 font-bold text-coffee-beans opacity-70">
          ✓
        </span>
      )}

      {/* Free space center dot */}
      {square.isFreeSpace && (
        <span className="absolute inset-0 flex items-center justify-center text-lg opacity-40">
          ☕
        </span>
      )}
    </button>
  );
}
