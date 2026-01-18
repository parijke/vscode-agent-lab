interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-linear-to-br from-warm-white via-cream-foam to-warm-white -z-10" />
      <div className="absolute inset-0 opacity-5 -z-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #8B6F47 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3E2723 0%, transparent 50%)`
      }} />

      <div className="text-center max-w-sm">
        {/* Coffee cup icon/decoration */}
        <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
          ☕
        </div>

        {/* Main title with elegant serif */}
        <h1 className="font-display text-5xl font-bold text-coffee-beans mb-1">
          Soc Ops
        </h1>
        <p className="text-lg text-wood-grain mb-2 font-display italic">
          Social Bingo at the Café
        </p>

        {/* Decorative divider */}
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-wood-grain to-transparent mx-auto mb-8" />

        {/* Rules box - warm wooden aesthetic */}
        <div className="bg-linear-to-br from-cream-foam to-warm-white rounded-lg p-6 shadow-lg border-2 border-wood-grain mb-8 text-left relative">
          {/* Subtle wood grain texture */}
          <div className="absolute inset-0 rounded-lg opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(90deg, #8B6F47 0px, #8B6F47 2px, transparent 2px, transparent 4px)`
          }} />
          
          <h2 className="font-display text-xl font-bold text-coffee-beans mb-4 relative z-10">
            How to Play
          </h2>
          <ul className="text-coffee-beans text-sm space-y-2 relative z-10">
            <li className="flex items-start">
              <span className="mr-3 text-wood-grain font-bold">✕</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-wood-grain font-bold">✕</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-wood-grain font-bold">✕</span>
              <span>Get 5 in a row to win a free espresso!</span>
            </li>
          </ul>
        </div>

        {/* Cozy button styling */}
        <button
          onClick={onStart}
          className="w-full bg-linear-to-b from-wood-grain to-coffee-beans text-warm-white font-display font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 hover:from-accent-light hover:to-wood-grain"
        >
          Start Game ☕
        </button>

        {/* Subtle footer text */}
        <p className="text-xs text-wood-grain/60 mt-6 italic">
          Welcome to our café
        </p>
      </div>
    </div>
  );
}
