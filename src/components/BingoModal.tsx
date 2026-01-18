interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative bg-linear-to-br from-cream-foam to-warm-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border-2 border-wood-grain overflow-hidden">
        {/* Coffee stain background effects */}
        <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20 pointer-events-none" style={{
          background: `radial-gradient(circle, #3E2723 0%, transparent 70%)`
        }} />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 opacity-15 pointer-events-none" style={{
          background: `radial-gradient(circle, #8B6F47 0%, transparent 70%)`
        }} />

        {/* Confetti/celebration element */}
        <div className="relative z-10">
          {/* Animated coffee cup celebration */}
          <div className="text-7xl mb-4 animate-bounce" style={{ animationDuration: '0.5s' }}>
            ☕
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl font-bold text-coffee-beans mb-2">
            BINGO!
          </h2>

          {/* Subtitle with coffee shop messaging */}
          <p className="text-lg text-wood-grain font-display mb-2 italic">
            You've earned a free espresso!
          </p>

          {/* Decorative divider */}
          <div className="w-16 h-1 bg-linear-to-r from-transparent via-wood-grain to-transparent mx-auto my-4" />

          {/* Congratulations message */}
          <p className="text-coffee-beans/80 mb-6 text-sm">
            Great job finding connections at the café! Share your win with friends. ☕
          </p>

          {/* Action button */}
          <button
            onClick={onDismiss}
            className="w-full bg-linear-to-b from-bingo to-wood-grain text-warm-white font-display font-bold py-3 px-6 rounded-lg active:scale-95 transition-all duration-150 hover:from-accent-light hover:to-wood-grain shadow-lg"
          >
            Keep Playing
          </button>
        </div>
      </div>
    </div>
  );
}
