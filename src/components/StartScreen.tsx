interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-8 py-16 md:px-12 md:py-20">
      <div className="text-center max-w-2xl w-full space-y-12">
        {/* Main title with enhanced typography */}
        <header className="space-y-6">
          <h1 className="font-display text-7xl md:text-8xl font-bold text-espresso tracking-wide leading-none">
            Soc Ops
          </h1>
          <p className="font-display text-2xl md:text-3xl font-normal text-wood-grain tracking-wider">
            Social Bingo at the Café
          </p>
        </header>

        {/* Rules - clean and minimal */}
        <section className="space-y-6 pt-4">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-coffee-beans tracking-wide">
            How to Play
          </h2>
          <ul className="text-espresso text-lg md:text-xl space-y-4 leading-relaxed text-left max-w-xl mx-auto">
            <li className="flex items-start gap-4">
              <span className="text-wood-grain font-bold shrink-0">1.</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-wood-grain font-bold shrink-0">2.</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-wood-grain font-bold shrink-0">3.</span>
              <span>Get 5 in a row to win a free espresso!</span>
            </li>
          </ul>
        </section>

        {/* CTA button with enhanced presence */}
        <button
          onClick={onStart}
          className="w-full max-w-md mx-auto bg-espresso text-warm-white font-display font-bold py-6 px-10 rounded-lg text-xl md:text-2xl tracking-wide shadow-lg hover:bg-coffee-beans hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-wood-grain focus:ring-offset-4 focus:ring-offset-warm-white transition-all duration-200 active:scale-98"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
