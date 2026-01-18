import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  // eslint-disable-next-line no-unused-vars
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-linear-to-br from-warm-white via-cream-foam to-warm-white">
      {/* Chalkboard-style header (café menu board aesthetic) */}
      <header className="relative bg-linear-to-br from-coffee-beans to-espresso text-warm-white p-4 shadow-lg overflow-hidden">
        {/* Chalkboard texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.5) 2px, rgba(255,255,255,.5) 4px)`
        }} />
        
        <div className="relative z-10 flex items-center justify-between">
          <button
            onClick={onReset}
            className="text-warm-white/80 hover:text-warm-white text-sm px-3 py-1.5 rounded transition-colors active:bg-white/10"
          >
            ← Back
          </button>
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold">☕ Soc Ops</h1>
            <p className="text-xs text-warm-white/70 italic">Social Bingo Mixer</p>
          </div>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Instructions */}
      <p className="text-center text-coffee-beans/70 text-sm py-3 px-4 font-body">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator - celebratory */}
      {hasBingo && (
        <div className="bg-linear-to-r from-bingo to-wood-grain text-warm-white text-center py-3 font-display font-bold text-sm shadow-md">
          ✨ BINGO! You earned a free espresso! ✨
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
