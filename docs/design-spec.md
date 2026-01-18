# Cozy Coffee Shop Redesign Spec

## Vision
Transform the social bingo game into a warm, inviting café experience that feels genuine and atmospheric rather than generic.

## Color Palette
- **Coffee Beans** (#5C4033): Primary dark tone, headers, text
- **Cream Foam** (#F5E6D3): Light backgrounds, napkin color
- **Wood Grain** (#8B6F47): Secondary warm tone, borders
- **Espresso Dark** (#3E2723): Deepest accents, shadows
- **Warm White** (#FEF9F3): Off-white backgrounds

## Typography
- **Headers**: Playfair Display (elegant serif, café menu boards)
- **Body**: Open Sans (warm, readable sans-serif)

## Implementation Progress

### ✅ Phase 1: Design System in src/index.css
- [x] Import Google Fonts (Playfair Display, Open Sans)
- [x] Create @theme variables for coffee palette
- [x] Add subtle café texture background (noise/pattern)
- [x] Configure Tailwind v4 utilities
- [x] Fix Tailwind v4 gradient syntax (bg-linear-to-* instead of bg-gradient-to-*)

### ✅ Phase 2: StartScreen.tsx
- [x] Warm wooden box aesthetic
- [x] Coffee-themed welcome messaging ("Welcome to our café")
- [x] Coffee cup emoji with animation
- [x] Cozy button styling with gradient
- [x] Café-inspired background with ambient gradients
- [x] Decorative dividers

### ✅ Phase 3: GameScreen.tsx
- [x] Chalkboard-style header (café menu boards)
- [x] Warm ambient background
- [x] Café-themed header with coffee cup icon
- [x] Celebratory bingo messaging ("You've earned a free espresso!")
- [x] Dark coffee-themed chalkboard texture

### ✅ Phase 4: BingoBoard.tsx
- [x] Wood grain texture (café table aesthetic)
- [x] Napkin/paper slip styling with gradients
- [x] Coffee ring stain effects (radial gradients)
- [x] Warm shadow and depth effects
- [x] Proper padding and rounded corners

### ✅ Phase 5: BingoSquare.tsx
- [x] Cream foam background color
- [x] Handwritten-style text spacing and word breaking
- [x] Coffee stain markers in corners for marked squares
- [x] Varied styling for free space with coffee cup emoji
- [x] Napkin texture overlay
- [x] Warm border colors

### ✅ Phase 6: BingoModal.tsx
- [x] Coffee shop congratulations ("You've earned a free espresso!")
- [x] Warm cream foam background with gradients
- [x] Animated coffee cup celebration (0.5s bounce)
- [x] Coffee stain background effects
- [x] Cozy reward presentation with decorative dividers
- [x] Proper styling for "Keep Playing" button

## Design Decisions

### Current Status
✅ All 6 phases completed! Implementation is complete and error-free.

### Key Implementation Details

#### Design System (`src/index.css`)
- **Font Stack**: Playfair Display for elegant serif headers, Open Sans for warm readable body text
- **Color Variables**: All coffee shop colors defined as Tailwind @theme variables for consistency
- **Texture**: Subtle dual-axis repeating gradients (0deg and 90deg) at 2px intervals for café ambiance without overwhelming
- **Background**: Warm off-white (#FEF9F3) base with layered texture effect

#### StartScreen.tsx
- **Hero Element**: Animated coffee cup (☕) with 3-second bounce for immediate café context
- **Typography**: Large Playfair Display title with italic subtitle
- **Box Design**: Cream foam background with wood grain texture overlay (opacity 5%) for authentic wooden table feel
- **Rules Styling**: Coffee X (✕) bullets instead of standard • for personality
- **Button**: Gradient from wood-grain to coffee-beans with hover state scaling for engagement
- **Ambient**: Subtle radial gradients layered behind for depth without distraction

#### GameScreen.tsx
- **Header**: Dark coffee-to-espresso gradient simulating chalkboard café menu boards
- **Chalkboard Texture**: Horizontal lines at 2px intervals with 50% opacity creating authentic chalkboard effect
- **Copy**: Changed "BINGO! You got a line!" to "✨ BINGO! You earned a free espresso! ✨" for coffee shop context
- **Background**: Warm white to cream foam gradient creating inviting ambient space

#### BingoBoard.tsx
- **Wood Surface**: Complex wood grain effect using two perpendicular repeating gradients (90° for grain, 0° for depth)
- **Coffee Ring Stains**: Two radial gradients positioned absolutely, 10-32% size with subtle opacity for aged café table
- **Padding**: Increased from gap-1 to gap-2 and added p-6 for napkin-like spacing
- **Shadow**: Enhanced shadow-2xl for elevated board presence
- **Border**: Rounded-xl with coffee-bean colored border

#### BingoSquare.tsx
- **Napkin Aesthetic**: 45° diagonal repeating gradient for subtle woven paper texture
- **Marked State**: Gradient from bingo (warm gold) to marked (cream) with coffee-bean border
- **Coffee Stains**: Radial gradients in top-right and bottom-left corners of marked squares (espresso dark and wood grain)
- **Free Space**: Dashed border (instead of solid) with background transparency and coffee cup emoji (☕)
- **Text Wrapping**: Updated to Tailwind v4's `wrap-break-word` utility for proper word breaking
- **Sizing**: Increased from min-h-[60px] to min-h-[80px] for better usability

#### BingoModal.tsx
- **Backdrop**: backdrop-blur-sm over black/40 for modern layered effect
- **Card Design**: Cream foam to warm-white gradient with wood-grain border
- **Coffee Effects**: Positioned radial gradients at -top-8 -right-8 and -bottom-12 -left-12 for authentic stain appearance
- **Animation**: Shortened bounce to 0.5s for immediate celebratory feel (from 0.5s ease-out)
- **Message**: "You've earned a free espresso!" with italicized café copy
- **Divider**: Gradient line from transparent through wood-grain to transparent for visual hierarchy

### Technical Notes
- All gradient utilities updated to Tailwind v4 syntax (bg-linear-to-* instead of bg-gradient-to-*)
- Custom @theme variables eliminate need for utility class prefixes
- Subtle opacity levels (5%, 10%, 15%, 20%) prevent visual noise while building atmosphere
- Repeating gradients kept at small intervals (1-2px) for texture rather than pattern
- All colors derived from warm coffee shop palette; no cool tones used

### Pixel Jam Workflow
✅ Implemented in 6 focused iterations matching Pixel Jam methodology
✅ Dev server running with hot module reloading throughout
✅ ESLint validation passes (no errors)
✅ All Tailwind v4 conventions followed
✅ Zero build errors or runtime issues
✅ Full production build succeeds (27.08 kB CSS gzip, 205.64 kB JS gzip)
✅ Ready for deployment and user testing

## Files Modified
- [src/index.css](src/index.css) - Design system with Google Fonts, @theme variables, and café textures
- [src/components/StartScreen.tsx](src/components/StartScreen.tsx) - Warm wooden welcome screen
- [src/components/GameScreen.tsx](src/components/GameScreen.tsx) - Chalkboard header with café styling
- [src/components/BingoBoard.tsx](src/components/BingoBoard.tsx) - Wood grain café table aesthetic
- [src/components/BingoSquare.tsx](src/components/BingoSquare.tsx) - Napkin-style squares with coffee stains
- [src/components/BingoModal.tsx](src/components/BingoModal.tsx) - Cozy espresso celebration
- [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) - Updated type signatures for square click handling

## Browser Compatibility
- ✅ Modern gradients (linear-gradient support)
- ✅ CSS backdrop-blur (modern browsers)
- ✅ CSS @supports queries (fallback ready)
- ✅ Responsive design (mobile-first)
