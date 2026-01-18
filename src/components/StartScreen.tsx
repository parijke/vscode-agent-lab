interface StartScreenProps {
  onStart: () => void;
  eventName?: string;
  organizerName?: string;
  eventDate?: string;
  organizerMessage?: string;
  organizerLogo?: string;
}

export function StartScreen({ 
  onStart,
  eventName = "Community Mixer",
  organizerName = "Your Community",
  eventDate,
  organizerMessage = "We're excited to help you connect with amazing people today!",
  organizerLogo
}: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Ambient background with warmth */}
      <div className="absolute inset-0 bg-linear-to-br from-warm-white via-cream-foam to-warm-white -z-10" />
      <div className="absolute inset-0 opacity-5 -z-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #8B6F47 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3E2723 0%, transparent 50%)`
      }} />

      {/* Floating conversation bubbles as background decoration */}
      <div className="absolute top-10 left-10 opacity-10 text-6xl">💬</div>
      <div className="absolute top-20 right-16 opacity-10 text-5xl">🗨️</div>
      <div className="absolute bottom-20 left-20 opacity-10 text-4xl">💭</div>
      <div className="absolute bottom-32 right-12 opacity-10 text-5xl">💬</div>

      <div className="text-center max-w-2xl w-full space-y-6">
        {/* Event Organizer Branding Section */}
        <div className="bg-linear-to-br from-cream-foam/80 to-warm-white/90 rounded-2xl p-6 shadow-lg border-2 border-wood-grain/30 backdrop-blur-sm">
          {organizerLogo && (
            <div className="mb-4 flex justify-center">
              <img src={organizerLogo} alt={organizerName} className="h-16 object-contain" />
            </div>
          )}
          <h2 className="font-display text-2xl font-bold text-coffee-beans mb-2">
            {eventName}
          </h2>
          {eventDate && (
            <p className="text-sm text-wood-grain font-medium mb-2">
              {eventDate}
            </p>
          )}
          <p className="text-coffee-beans/80 text-sm italic">
            Hosted by {organizerName}
          </p>
        </div>

        {/* Hero Section - Connection Focus */}
        <div className="space-y-4">
          {/* Coffee cups as symbol of shared experience */}
          <div className="flex justify-center items-center gap-3 text-5xl mb-2">
            <span className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}>☕</span>
            <span className="text-3xl text-wood-grain">✨</span>
            <span className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>☕</span>
          </div>

          {/* Main headline - connection focused */}
          <h1 className="font-display text-5xl md:text-6xl font-bold text-coffee-beans leading-tight">
            Find Your People
          </h1>
          <p className="text-xl md:text-2xl text-wood-grain font-display italic">
            Meet amazing folks over coffee & conversation
          </p>

          {/* Decorative connection line */}
          <div className="flex items-center justify-center gap-2 my-4">
            <div className="w-16 h-1 bg-linear-to-r from-transparent via-wood-grain to-wood-grain" />
            <span className="text-2xl">🤝</span>
            <div className="w-16 h-1 bg-linear-to-r from-wood-grain via-wood-grain to-transparent" />
          </div>
        </div>

        {/* Organizer Welcome Message */}
        <div className="bg-linear-to-br from-warm-white to-cream-foam rounded-xl p-5 shadow-md border border-wood-grain/20 relative">
          <div className="absolute -top-3 left-6 bg-wood-grain text-warm-white px-3 py-1 rounded-full text-xs font-bold">
            Welcome Message
          </div>
          <p className="text-coffee-beans leading-relaxed pt-2">
            {organizerMessage}
          </p>
        </div>

        {/* Social Context & How It Works */}
        <div className="bg-linear-to-br from-cream-foam to-warm-white rounded-2xl p-6 shadow-lg border-2 border-wood-grain/30 text-left relative overflow-hidden">
          {/* Subtle texture */}
          <div className="absolute inset-0 rounded-2xl opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(90deg, #8B6F47 0px, #8B6F47 2px, transparent 2px, transparent 4px)`
          }} />
          
          <h2 className="font-display text-2xl font-bold text-coffee-beans mb-2 relative z-10 text-center">
            Your Connection Journey
          </h2>
          <p className="text-center text-wood-grain/80 text-sm mb-5 relative z-10 italic">
            Every conversation brings you closer to new friendships
          </p>
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">🔍</div>
              <div>
                <h3 className="font-bold text-coffee-beans mb-1">Discover Connections</h3>
                <p className="text-sm text-coffee-beans/80">
                  Explore prompts that spark genuine conversations with fellow attendees
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">💬</div>
              <div>
                <h3 className="font-bold text-coffee-beans mb-1">Start Conversations</h3>
                <p className="text-sm text-coffee-beans/80">
                  Find people who match each prompt and learn their stories
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">🎉</div>
              <div>
                <h3 className="font-bold text-coffee-beans mb-1">Celebrate Together</h3>
                <p className="text-sm text-coffee-beans/80">
                  Connect 5 in a row and earn your celebration moment—plus bragging rights!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof / Community Vibe */}
        <div className="flex items-center justify-center gap-6 text-sm text-wood-grain/70">
          <div className="flex items-center gap-2">
            <span className="text-xl">👥</span>
            <span>Make new friends</span>
          </div>
          <div className="w-1 h-4 bg-wood-grain/30" />
          <div className="flex items-center gap-2">
            <span className="text-xl">🌟</span>
            <span>Share experiences</span>
          </div>
          <div className="w-1 h-4 bg-wood-grain/30" />
          <div className="flex items-center gap-2">
            <span className="text-xl">☕</span>
            <span>Enjoy the moment</span>
          </div>
        </div>

        {/* CTA Button - FOMO & Excitement */}
        <button
          onClick={onStart}
          className="w-full bg-linear-to-b from-wood-grain to-coffee-beans text-warm-white font-display font-bold py-5 px-8 rounded-xl text-xl shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-200 hover:from-accent-light hover:to-wood-grain relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <span>Start Connecting</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-warm-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>

        {/* Footer tagline */}
        <p className="text-sm text-wood-grain/60 italic">
          Because the best connections happen over coffee ☕
        </p>
      </div>
    </div>
  );
}
