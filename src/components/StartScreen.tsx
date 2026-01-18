interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Layered animated backgrounds - atmospheric depth */}
      <div className="absolute inset-0 bg-linear-to-br from-warm-white via-cream-foam to-warm-white -z-10" />
      
      {/* Animated ambient elements */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #8B6F47 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3E2723 0%, transparent 50%)`,
          animation: 'bgPulse 8s ease-in-out infinite'
        }} 
      />
      
      {/* Floating decorative coffee beans - parallax effect */}
      <div 
        className="absolute top-20 left-10 text-2xl opacity-20"
        style={{
          animation: 'parallaxFloat 15s ease-in-out infinite'
        }}
      >
        ☕
      </div>
      <div 
        className="absolute bottom-20 right-10 text-3xl opacity-15"
        style={{
          animation: 'parallaxFloat 12s ease-in-out infinite 2s'
        }}
      >
        ☕
      </div>

      <div className="text-center max-w-sm">
        {/* Hero coffee cup with floating animation - orchestrated entrance */}
        <div 
          className="text-7xl mb-6"
          style={{
            animation: 'fadeInScale 0.6s ease-out, floatBob 4s ease-in-out 0.6s infinite',
            animationFillMode: 'backwards'
          }}
        >
          ☕
        </div>

        {/* Main title with staggered fade-in scale */}
        <h1 
          className="font-display text-5xl font-bold text-coffee-beans mb-1"
          style={{
            animation: 'fadeInScale 0.8s ease-out 0.2s backwards'
          }}
        >
          Soc Ops
        </h1>
        <p 
          className="text-lg text-wood-grain mb-2 font-display italic"
          style={{
            animation: 'fadeInScale 0.8s ease-out 0.3s backwards'
          }}
        >
          Social Bingo at the Café
        </p>

        {/* Decorative divider with slide-in animation */}
        <div 
          className="w-24 h-1 bg-linear-to-r from-transparent via-wood-grain to-transparent mx-auto mb-8"
          style={{
            animation: 'slideInFromLeft 0.6s ease-out 0.5s backwards'
          }}
        />

        {/* Rules box with slide-up entrance */}
        <div 
          className="bg-linear-to-br from-cream-foam to-warm-white rounded-lg p-6 shadow-lg border-2 border-wood-grain mb-8 text-left relative transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          style={{
            animation: 'slideUpFadeIn 0.7s ease-out 0.6s backwards'
          }}
        >
          {/* Subtle wood grain texture */}
          <div className="absolute inset-0 rounded-lg opacity-5 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(90deg, #8B6F47 0px, #8B6F47 2px, transparent 2px, transparent 4px)`
          }} />
          
          <h2 className="font-display text-xl font-bold text-coffee-beans mb-4 relative z-10">
            How to Play
          </h2>
          <ul className="text-coffee-beans text-sm space-y-2 relative z-10">
            <li className="flex items-start transition-all duration-200 hover:translate-x-1 hover:text-wood-grain cursor-default">
              <span className="mr-3 text-wood-grain font-bold transition-transform duration-200 hover:scale-110">✕</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start transition-all duration-200 hover:translate-x-1 hover:text-wood-grain cursor-default">
              <span className="mr-3 text-wood-grain font-bold transition-transform duration-200 hover:scale-110">✕</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start transition-all duration-200 hover:translate-x-1 hover:text-wood-grain cursor-default">
              <span className="mr-3 text-wood-grain font-bold transition-transform duration-200 hover:scale-110">✕</span>
              <span>Get 5 in a row to win a free espresso!</span>
            </li>
          </ul>
        </div>

        {/* CTA button with bounce-in entrance and enhanced interactions */}
        <button
          onClick={onStart}
          className="w-full bg-linear-to-b from-wood-grain to-coffee-beans text-warm-white font-display font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-2xl active:scale-95 transition-all duration-200 hover:from-accent-light hover:to-wood-grain focus:outline-none focus:ring-4 focus:ring-wood-grain/30"
          style={{
            animation: 'bounceIn 0.8s ease-out 0.8s backwards'
          }}
        >
          Start Game ☕
        </button>

        {/* Subtle footer text with delayed fade-in */}
        <p 
          className="text-xs text-wood-grain/60 mt-6 italic"
          style={{
            animation: 'fadeInScale 0.6s ease-out 1s backwards'
          }}
        >
          Welcome to our café
        </p>
      </div>
    </div>
  );
}
