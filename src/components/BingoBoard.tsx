import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  // eslint-disable-next-line no-unused-vars
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="relative p-6 rounded-xl shadow-2xl" style={{
      background: `linear-gradient(135deg, #8B6F47 0%, #A0826D 50%, #8B6F47 100%)`,
      backgroundSize: '100% 100%'
    }}>
      {/* Wood grain texture overlay */}
      <div className="absolute inset-0 rounded-xl opacity-40" style={{
        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(62, 39, 35, 0.3) 2px, rgba(62, 39, 35, 0.3) 4px), repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(62, 39, 35, 0.1) 1px, rgba(62, 39, 35, 0.1) 2px)`
      }} />

      {/* Coffee ring stain effect (subtle) */}
      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 pointer-events-none" style={{
        background: `radial-gradient(circle, #3E2723 0%, transparent 70%)`
      }} />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-5 pointer-events-none" style={{
        background: `radial-gradient(circle, #3E2723 0%, transparent 70%)`
      }} />

      {/* Grid with napkin aesthetic */}
      <div className="relative z-10 grid grid-cols-5 gap-2 w-full max-w-md aspect-square">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
